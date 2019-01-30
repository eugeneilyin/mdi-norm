'use strict'

var plugin = require('babel-plugin-macros')
var createMacro = plugin.createMacro
var libName = 'mdi-norm'

function Error(path, msg) {
  throw path.buildCodeFrameError('\nMacro error: \x1b[31m' + msg + '\x1b[0m')
}

function getIconName(name) {
  if (typeof name !== 'string') {
    return name
  }
  var iconName = name.trim().replace(/\s\s|\s/g, ' ')

  function charMap(char, index) {
    var prevChar = iconName[index - 1]
    return index === 0 || prevChar === '-' || prevChar === '_' || prevChar === ' ' || prevChar >= '0' && prevChar <= '9'
      ? char.toUpperCase()
      : char
  }

  iconName = iconName.split('').map(charMap).join('').replace(/-|_|\s/g, '')
  return iconName[0] >= '0' && iconName[0] <= '9' ? `Icon${iconName}` : iconName
}

function addESImport(t, path, iconName) {
  var source = libName + '/es/' + iconName
  var programPath = path.find(function(path) {
    return path.isProgram()
  })
  if (programPath) {
    var contains = false
    var lastImportPath = null
    programPath.get('body').forEach(function(path) {
      if (path.isImportDeclaration()) {
        lastImportPath = path
        var sourcePath = path.get('source')
        contains = contains || sourcePath.isStringLiteral() && sourcePath.get('value').node === source
      }
    })
    if (!contains) {
      var importNode = t.importDeclaration(
        [t.importSpecifier(t.identifier(iconName), t.identifier(iconName))],
        t.stringLiteral(source))
      if (lastImportPath != null) {
        lastImportPath.insertAfter(importNode)
      } else {
        programPath.unshiftContainer('body', importNode)
      }
    }
  }
}

function addCJSImport(t, path, iconName) {
  var source = libName + '/lib/' + iconName
  var programPath = path.find(function(path) {
    return path.isProgram()
  })
  if (programPath) {
    var bodyPaths = programPath.get('body')
    for (var i = 0; i < bodyPaths.length; i++) {
      var variableDeclarationPath = bodyPaths[i]
      if (variableDeclarationPath.isVariableDeclaration() &&
        variableDeclarationPath.get('declarations').length === 1 &&
        variableDeclarationPath.get('declarations')[0].isVariableDeclarator() &&
        variableDeclarationPath.get('declarations')[0].get('id').isIdentifier({ name: iconName })) {
        return
      }
    }
    var requireExpressionNode = t.variableDeclaration('var', [
      t.variableDeclarator(
        t.identifier(iconName),
        t.memberExpression(
          t.callExpression(t.identifier('require'), [t.stringLiteral(source)]), t.identifier(iconName)))
    ])
    programPath.unshiftContainer('body', requireExpressionNode)
  }
}

function getJSXAttributes(t, objectExpressionPath) {
  var jSXAttributes = []
  var objectPropertiesPath = objectExpressionPath.get('properties')
  objectPropertiesPath.forEach(function(objectPropertyPath) {
    if (objectPropertyPath.isObjectProperty()) {
      if (objectPropertyPath.get('computed').node === true) {
        Error(objectPropertyPath,
          'Computed keys are not not allowed in object with icon props')
      }

      var keyName
      var keyPath = objectPropertyPath.get('key')
      if (keyPath.isIdentifier()) {
        keyName = keyPath.get('name').node
      } else if (keyPath.isStringLiteral()) {
        keyName = keyPath.get('value').node
      } else {
        Error(objectPropertyPath,
          'Only identifier or string keys are allowed in object with icon props')
      }

      var valuePath = objectPropertyPath.get('value')
      if (valuePath.isJSXElement() || valuePath.isStringLiteral()) {
        jSXAttributes.push(t.jSXAttribute(t.jSXIdentifier(keyName), valuePath.node))
      } else {
        jSXAttributes.push(t.jSXAttribute(t.jSXIdentifier(keyName), t.jSXExpressionContainer(valuePath.node)))
      }

    } else if (
      objectPropertyPath.isSpreadProperty() && objectPropertyPath.node.type === 'SpreadProperty' ||
      objectPropertyPath.isSpreadElement && objectPropertyPath.isSpreadElement()
    ) {
      jSXAttributes.push(t.jSXSpreadAttribute(objectPropertyPath.get('argument').node))
    } else {
      Error(objectPropertyPath, 'Only object and spread properties are allowed in object with icon props')
    }
  })
  return jSXAttributes
}

function getIconJSX(t, iconName, jSXAttributeNodes) {
  return t.jSXElement(t.jSXOpeningElement(t.jSXIdentifier(iconName), jSXAttributeNodes || [], true), null, [], true)
}

function extractIconName(path) {
  var iconName
  if (path.isStringLiteral() || path.isJSXText()) {
    iconName = getIconName(path.get('value').node)
  } else if (path.isJSXExpressionContainer()) {
    var expressionPath = path.get('expression')
    if (expressionPath.isStringLiteral()) {
      iconName = getIconName(path.get('expression.value').node)
    } else if (
      expressionPath.isTemplateLiteral() &&
      expressionPath.get('quasis').length === 1 &&
      expressionPath.get('expressions').length === 0 &&
      expressionPath.get('quasis')[0].isTemplateElement() &&
      expressionPath.get('quasis')[0].get('value.cooked').node != null &&
      expressionPath.get('quasis')[0].get('value.cooked').node.trim() !== ''
    ) {
      iconName = getIconName(expressionPath.get('quasis')[0].get('value.cooked').node)
    } else {
      Error(expressionPath, 'The icon name must be a text string')
    }
  } else {
    Error(path, 'The icon name must be a text string')
  }
  return iconName
}

function proceedAsJSXClosingElement(t, path) {
  return path.isJSXIdentifier() && path.parentPath.isJSXClosingElement({ name: path.node })
}

function proceedAsJSXElement(t, path, addImport) {
  var jsxOpeningElementPath = path.parentPath
  var jsxElementPath = jsxOpeningElementPath.parentPath
  var isJSXElement = path.isJSXIdentifier() &&
    jsxOpeningElementPath.isJSXOpeningElement({ name: path.node }) &&
    jsxElementPath.isJSXElement() &&
    jsxElementPath.get('closingElement').node != null
  if (isJSXElement) {
    if (jsxElementPath.get('children').length === 0) {
      Error(jsxElementPath.get('closingElement'), 'Missed icon name')
    } else if (jsxElementPath.get('children').length > 1) {
      Error(jsxElementPath.get('children')[1], 'Icon name must be a single text element')
    }
    var iconName = extractIconName(jsxElementPath.get('children')[0])
    var openingElementAttributeNodes = jsxOpeningElementPath.get('attributes').map(function(path) {
      return path.node
    })
    addImport(t, path, iconName)
    var jsxElementContainerPath = jsxElementPath.parentPath
    if (jsxElementContainerPath.isJSXExpressionContainer({ expression: jsxElementPath.node })) {
      jsxElementContainerPath.replaceWith(getIconJSX(t, iconName, openingElementAttributeNodes))
    } else {
      jsxElementPath.replaceWith(getIconJSX(t, iconName, openingElementAttributeNodes))
    }
  }
  return isJSXElement
}

function proceedAsJSXSelfClosingElement(t, path, addImport) {
  var jsxOpeningElementPath = path.parentPath
  var isInSelfClosingJSXElement = path.isJSXIdentifier() &&
    jsxOpeningElementPath.isJSXOpeningElement({ name: path.node }) &&
    jsxOpeningElementPath.get('selfClosing').node === true
  if (isInSelfClosingJSXElement) {
    var jsxElementPath = jsxOpeningElementPath.parentPath
    if (!(jsxElementPath.isJSXElement() &&
      jsxElementPath.get('closingElement').node === null &&
      jsxElementPath.get('children').length === 0)) {
      Error(jsxElementPath, 'Unexpected JSX self closing expression in icon definition')
    }
    var jsxAttributes = jsxOpeningElementPath.get('attributes')
    var nameJSXAttributePath = jsxAttributes.find(function(path) {
      return path.get('name').isJSXIdentifier({ name: 'name' })
    })
    if (nameJSXAttributePath == null) {
      Error(jsxElementPath, 'Attribute name="icon name" must be specified for self closing JSX element')
    }
    var iconName = extractIconName(nameJSXAttributePath.get('value'))
    nameJSXAttributePath.remove()
    addImport(t, path, iconName)
    path.replaceWith(t.jSXIdentifier(iconName))
    var jsxElementContainerPath = jsxElementPath.parentPath
    if (jsxElementContainerPath.isJSXExpressionContainer({ expression: jsxElementPath.node })) {
      jsxElementContainerPath.replaceWith(jsxElementPath.node)
    } else {
      jsxElementPath.replaceWith(jsxElementPath.node)
    }
  }
  return isInSelfClosingJSXElement
}

function proceedAsTaggedTemplate(t, path, addImport) {
  var taggedTemplateExpressionPath = path.parentPath
  var isInTaggedTemplateExpression = path.isIdentifier() &&
    taggedTemplateExpressionPath.isTaggedTemplateExpression({ tag: path.node })
  if (isInTaggedTemplateExpression) {
    var quasiPath = taggedTemplateExpressionPath.get('quasi')
    if (quasiPath.get('quasis').length !== 1 &&
      quasiPath.get('expressions').length !== 0) {
      Error(quasiPath.get('expressions')[0], 'Expressions are not allowed in icon name specification')
    }

    var rawIconName = quasiPath.get('quasis')[0].get('value.cooked').node
    if (rawIconName == null || ('' + rawIconName).trim() === '') {
      Error(quasiPath, 'Empty text is not allowed in tagged templates as an icon name')
    }
    var iconName = getIconName(rawIconName)

    var callExpressionPath = taggedTemplateExpressionPath.parentPath
    var isInCallExpression = callExpressionPath.isCallExpression({ callee: taggedTemplateExpressionPath.node })
    if (isInCallExpression) {
      var callExpressionArgumentsPath = callExpressionPath.get('arguments')
      if (callExpressionArgumentsPath.length > 1) {
        Error(callExpressionArgumentsPath[1], 'Only one argument is allowed for the icon tagged template call')
      } else if (callExpressionArgumentsPath.length === 0) {
        addImport(t, path, iconName)
        callExpressionPath.parentPath.isJSXExpressionContainer()
          ? callExpressionPath.parentPath.replaceWith(getIconJSX(t, iconName))
          : callExpressionPath.replaceWith(getIconJSX(t, iconName))
      } else {
        var objectExpressionPath = callExpressionArgumentsPath[0]
        if (!objectExpressionPath.isObjectExpression()) {
          Error(objectExpressionPath, 'Only object argument is allowed for the icon tagged template call')
        }
        var jSXAttributes = getJSXAttributes(t, objectExpressionPath)
        addImport(t, path, iconName)
        callExpressionPath.parentPath.isJSXExpressionContainer()
          ? callExpressionPath.parentPath.replaceWith(getIconJSX(t, iconName, jSXAttributes))
          : callExpressionPath.replaceWith(getIconJSX(t, iconName, jSXAttributes))
      }
    } else {
      addImport(t, path, iconName)
      taggedTemplateExpressionPath.parentPath.isJSXExpressionContainer()
        ? taggedTemplateExpressionPath.parentPath.replaceWith(getIconJSX(t, iconName))
        : taggedTemplateExpressionPath.replaceWith(getIconJSX(t, iconName))
    }
  }
  return isInTaggedTemplateExpression
}

function proceedAsCallExpression(t, path, addImport) {
  var callExpressionPath = path.parentPath
  var isInCallExpression = path.isIdentifier() && callExpressionPath.isCallExpression({ callee: path.node })
  if (isInCallExpression) {
    var callArgsPath = callExpressionPath.get('arguments')
    if (callArgsPath.length === 0) {
      Error(path, 'Macro must be called with string icon name and optional icon props object')
    } else if (callArgsPath.length > 2) {
      Error(callArgsPath[2], 'Only two arguments: icon name string and optional icon props are allowed')
    }

    var iconNamePath = callArgsPath[0]
    if (!iconNamePath.isStringLiteral()) {
      Error(callArgsPath[0], 'First argument must be a string icon name')
    }
    var iconName = getIconName(callArgsPath[0].get('value').node)

    if (callArgsPath.length === 1) {
      addImport(t, path, iconName)
      callExpressionPath.parentPath.isJSXExpressionContainer()
        ? callExpressionPath.parentPath.replaceWith(getIconJSX(t, iconName))
        : callExpressionPath.replaceWith(getIconJSX(t, iconName))
    } else {
      var objectExpressionPath = callArgsPath[1]
      if (!objectExpressionPath.isObjectExpression()) {
        Error(objectExpressionPath, 'Second argument is optional and must be an object with icon props')
      }
      var jSXAttributes = getJSXAttributes(t, objectExpressionPath)
      addImport(t, path, iconName)
      callExpressionPath.parentPath.isJSXExpressionContainer()
        ? callExpressionPath.parentPath.replaceWith(getIconJSX(t, iconName, jSXAttributes))
        : callExpressionPath.replaceWith(getIconJSX(t, iconName, jSXAttributes))
    }
  }
  return isInCallExpression
}

function logoutProgram(path) {
  var programPath = path.find(function(path) {
    return path.isProgram()
  })
  programPath && console.log(programPath.node)
}

function proceedReferences(t, refs, addImport) {
  refs && refs.reverse().forEach(function(path) {
    if (!proceedAsJSXElement(t, path, addImport) &&
      !proceedAsJSXClosingElement(t, path, addImport) &&
      !proceedAsJSXSelfClosingElement(t, path, addImport) &&
      !proceedAsTaggedTemplate(t, path, addImport) &&
      !proceedAsCallExpression(t, path, addImport)) {
      Error(path, libName + '/macro can only be used as JSX element, tagged template, or function call')
    }
  })
}

function findMacrosImportDeclaration(source, programPath) {
  if (programPath == null || !programPath.isProgram) {
    Error(programPath, 'Program path is expected')
  }

  var bodyPaths = programPath.get('body')
  for (var i = 0; i < bodyPaths.length; i++) {
    var path = bodyPaths[i]

    // ES Import check
    if (path.isImportDeclaration() && path.get('source').isStringLiteral({ value: source })) {
      var id = null
      var specifiers = path.get('specifiers')
      if (specifiers.length === 1 && specifiers[0].isImportDefaultSpecifier()) {
        id = specifiers[0].get('local').isIdentifier() && specifiers[0].get('local').get('name').node
      }
      return { modules: false, id: id }
    }

    // CommonJS check
    if (!path.isVariableDeclaration()) {
      continue
    }
    var declarationPaths = path.get('declarations')
    if (!(declarationPaths.length === 1 && declarationPaths[0].isVariableDeclarator())) {
      continue
    }
    var idPath = declarationPaths[0].get('id')
    var initPath = declarationPaths[0].get('init')
    if (!initPath.isCallExpression()) {
      continue
    }
    var calleePath = initPath.get('callee')
    if (!calleePath.isIdentifier({ name: 'require' })) {
      continue
    }
    var argumentPaths = initPath.get('arguments')
    if (!(argumentPaths.length === 1 && argumentPaths[0].isStringLiteral({ value: source }))) {
      continue
    }
    return { modules: 'commonjs', id: idPath.get('name').node }
  }
  return { modules: null, id: null }
}

function mdiNormMacro(context) {
  var references = context.references
  var state = context.state
  var t = context.babel.types
  var source = context.source

  var macrosImport = findMacrosImportDeclaration(source, state.file.path)
  var addImport = macrosImport.modules === 'commonjs' ? addCJSImport : addESImport

  if (macrosImport.modules != null) {
    proceedReferences(t, references.default, addImport)
  } else {
    Error(state.file.path, '"' + libName + '/macro" import not found')
  }

  if (macrosImport.id != null) {
    var firstChar = ('' + macrosImport.id).charAt(0)
    if (firstChar === firstChar.toLowerCase()) {
      var jsxIdentifiers = []
      state.file.path.traverse({
        JSXIdentifier: function(path) {
          if (path.get('name').node === macrosImport.id) {
            jsxIdentifiers.push(path)
          }
        }
      })
      proceedReferences(t, jsxIdentifiers, addImport)
    }
  }
}

module.exports = createMacro(mdiNormMacro)
