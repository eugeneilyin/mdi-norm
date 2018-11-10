const pathUtils = require('path')

exports.__esModule = true
exports.default = babelPluginImportExternalHelpers

function babelPluginImportExternalHelpers({ types: t }, options = {}) {
  const {
    root = '',
    path = './babelHelpers',
    identifier = '_babelHelpers',
    modules = 'commonjs',
    logoutHelpers = false,
    removeExportsInitialization = false,
    moveHelpersOnTopOnEachChange = false,
  } = options

  if (typeof root !== 'string') {
    throw new Error(`.root must be a string, or undefined`)
  }

  if (typeof path !== 'string') {
    throw new Error(`.path must be a string, or undefined`)
  }

  if (typeof identifier !== 'string') {
    throw new Error(`.identifier must be a string, or undefined`)
  }

  if (typeof modules === 'boolean' && modules !== false ||
    typeof modules === 'string' && modules !== 'commonjs') {
    throw new Error(`.modules must be a boolean false, or 'commonjs' string (default), of undefined`)
  }

  if (typeof logoutHelpers !== 'boolean') {
    throw new Error(`.logoutHelpers must be a boolean, or undefined`)
  }

  if (typeof removeExportsInitialization !== 'boolean') {
    throw new Error(`.logoutHelpers must be a boolean, or undefined`)
  }

  if (typeof moveHelpersOnTopOnEachChange !== 'boolean') {
    throw new Error(`.moveHelpersOnTopOnEachChange must be a boolean, or undefined`)
  }

  const getHelpersLocalPath = filename => {
    let result = pathUtils.relative(filename, helpersFullPath).split(pathUtils.sep).join('/').replace('..', '.')
    return result.substring(0, 4) === './..' ? result.substring(2) : result
  }

  const getHelpersCallExpression = helper =>
    t.memberExpression(t.identifier(identifier), t.identifier(helper))
  const getHelpersDirectCallExpression = helper => t.identifier(helper)

  const isHelpersCallExpression = (path, moduleHelpers) => {
    if (modules === false) {
      return path.get('callee').isIdentifier() &&
        moduleHelpers.has(path.get('callee.name').node)
    } else {
      return path.get('callee').isMemberExpression() &&
        path.get('callee.object').isIdentifier() &&
        path.get('callee.object.name').node === identifier
    }
  }
  const isRequireCallExpression = path =>
    path.get('callee').isIdentifier({ name: 'require' })
  const isRequireHelpersCallExpression = (path, filename) =>
    path.get('callee').isIdentifier({ name: 'require' }) &&
    path.get('arguments')[0].isStringLiteral({ value: getHelpersLocalPath(filename) })

  const getHelpersImportDeclarationCommonJS = filename =>
    t.variableDeclaration('var',
      [t.variableDeclarator(
        t.identifier(identifier),
        t.callExpression(
          t.identifier('require'),
          [t.stringLiteral(getHelpersLocalPath(filename))]))])
  const getHelpersImportDeclarationES = (filename, moduleHelpers) =>
    t.importDeclaration(
      [...moduleHelpers.values()].sort().map(
        name => t.importSpecifier(t.identifier(name), t.identifier(name))),
      t.stringLiteral(getHelpersLocalPath(filename)))

  const extractRequire = path => {
    if (path.isVariableDeclaration({ kind: 'var' })) {
      const declarationsPath = path.get('declarations')
      if (declarationsPath.length === 1) {
        const declarationPath = declarationsPath[0]
        const idPath = declarationPath.get('id')
        const initPath = declarationPath.get('init')
        if (
          declarationPath.isVariableDeclarator() &&
          idPath.isIdentifier() &&
          initPath.isCallExpression()
        ) {
          const calleePath = initPath.get('callee')
          const argumentsPath = initPath.get('arguments')
          if (
            calleePath.isIdentifier({ name: 'require' }) &&
            argumentsPath.length === 1 &&
            argumentsPath[0].isStringLiteral()
          ) {
            return argumentsPath[0].get('value').node
          } else if (
            calleePath.isMemberExpression() &&
            calleePath.get('object').isIdentifier() &&
            calleePath.get('property').isIdentifier() &&
            argumentsPath.length === 1
          ) {
            const requireCallPath = argumentsPath[0]
            if (
              requireCallPath.isCallExpression() &&
              requireCallPath.get('callee').isIdentifier({ name: 'require' }) &&
              requireCallPath.get('arguments').length === 1 &&
              requireCallPath.get('arguments')[0].isStringLiteral()
            ) {
              return requireCallPath.get('arguments')[0].node.value
            }
          }
        }
      }
    }
  }
  const insertHelpersImport = (path, filename, moduleHelpers) => {
    const programPath = path.isProgram() ? path : getProgramPath(path)
    programPath.unshiftContainer('body',
      modules === false
        ? getHelpersImportDeclarationES(filename, moduleHelpers)
        : getHelpersImportDeclarationCommonJS(filename))
  }
  const updateHelpersImport = (path, filename, moduleHelpers) => {
    const programPath = getProgramPath(path)
    const bodyPath = programPath.get('body')
    const helpersImport = bodyPath.find(path =>
      path.isImportDeclaration() &&
      path.get('source').isStringLiteral() &&
      path.get('source').node.value === getHelpersLocalPath(filename))
    helpersImport.remove()
    programPath.unshiftContainer('body',
      getHelpersImportDeclarationES(filename, moduleHelpers))
  }
  const moveHelpersToTop = (path, filename) => {
    const bodyPath = getProgramPath(path).get('body')

    let helpersImportPath
    let firstRequirePath

    for (let index = 0; index < bodyPath.length; index++) {
      path = bodyPath[index]
      const requireValue = extractRequire(path)
      if (!helpersImportPath && requireValue === getHelpersLocalPath(filename)) {
        helpersImportPath = path
      } else if (!firstRequirePath && requireValue) {
        firstRequirePath = path
      }
      if (helpersImportPath && firstRequirePath) {
        break
      }
    }

    if (firstRequirePath && helpersImportPath) {
      helpersImportPath.remove()
      firstRequirePath.insertBefore(getHelpersImportDeclarationCommonJS(filename))
    }
  }
  const getProgramPath = path => path.find(p => p.isProgram())

  const removeExportsVoid0 = programPath => {
    const bodyPath = programPath.get('body')
    bodyPath.forEach(path => {
      if (path.isExpressionStatement()) {
        const expressionPath = path.get('expression')
        if (expressionPath.isAssignmentExpression()) {
          console.log('PATH', expressionPath.node.type)
        }
      }
    })
    console.log('-'.repeat(80))
  }

  const helpers = new Set()
  const helpersFullPath = pathUtils.join(root, path)

  return {
    name: 'import-external-helpers',
    pre(state) {
      this.moduleHelpers = new Set()
      this.helpersImportUpdated = true
      this.helpersImportInjected = false
      state.set('helperGenerator', name => {
        const helperName = name !== 'extends' ? name : '_extends';
        if (getHelpersLocalPath(state.opts.filename) !== '') {
          helpers.add(helperName)
          if (!this.moduleHelpers.has(helperName)) {
            this.moduleHelpers.add(helperName)
            this.helpersImportUpdated = false
          }
          return modules === false
            ? getHelpersDirectCallExpression(helperName)
            : getHelpersCallExpression(helperName)
        }
      })
    },
    visitor: {
      CallExpression: {
        exit(path, state) {
          if (!moveHelpersOnTopOnEachChange) {
            return;
          }
          if (!this.helpersImportInjected && isHelpersCallExpression(path, this.moduleHelpers)) {
            insertHelpersImport(path, state.filename, this.moduleHelpers)
            this.helpersImportUpdated = true
            this.helpersImportInjected = true
          }
          if (this.helpersImportInjected &&
            !isRequireHelpersCallExpression(path, state.filename) &&
            isRequireCallExpression(path)) {
            moveHelpersToTop(path, state.filename)
          } else if (this.helpersImportInjected && modules === false && !this.helpersImportUpdated) {
            updateHelpersImport(path, state.filename, this.moduleHelpers)
            this.helpersImportUpdated = true
          }
        }
      },
      VariableDeclaration: {
        exit(path, state) {
          if (!moveHelpersOnTopOnEachChange) {
            return;
          }
          const requireValue = extractRequire(path)
          if (requireValue && requireValue !== getHelpersLocalPath(state.filename)) {
            moveHelpersToTop(path, state.filename)
          }
        }
      },
      UnaryExpression: {
        exit(path) {
          if (
            removeExportsInitialization &&
            path.node.operator === 'void' &&
            path.get('argument').isNumericLiteral({ value: 0 })
          ) {
            let currentPath = path
            let parentPath = path.parentPath
            while (
              parentPath.get('left').isMemberExpression() &&
              parentPath.get('left.object').isIdentifier({ name: 'exports' }) &&
              parentPath.get('right') === currentPath) {
              currentPath = parentPath
              parentPath = currentPath.parentPath
            }
            if (parentPath.isExpressionStatement() && parentPath.parentPath.isProgram()) {
              parentPath.remove()
            }
          }
        }
      }
    },
    post(state) {
      if (this.moduleHelpers.size > 0) {
        if (!this.helpersImportInjected) {
          insertHelpersImport(state.path, state.opts.filename, this.moduleHelpers)
        } else {
          moveHelpersToTop(state.path, state.opts.filename)
        }
        if (this.helpersImportInjected && modules === false && !this.helpersImportUpdated) {
          updateHelpersImport(state.path, state.opts.filename, this.moduleHelpers)
        }
      }
      if (logoutHelpers) {
        console.log(`Used helpers ${[...helpers].join()} from ${pathUtils.parse(state.opts.filename).base}`)
      }
    }
  }
}
