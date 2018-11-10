function defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ('value' in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

export /*#__PURE__*/ function interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

export /*#__PURE__*/ function classCallCheck(instance, Constructor) {
  if (process.env.NODE_ENV !== 'production') {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
}

export function createClass(Constructor, protoProps, staticProps) {
  if (protoProps) defineProperties(Constructor.prototype, protoProps)
  if (staticProps) defineProperties(Constructor, staticProps)
  return Constructor
}

export /*#__PURE__*/ function getPrototypeOf(o) {
  var _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o)
  }
  return _getPrototypeOf(o)
}

export function inherits(subClass, superClass) {
  if (process.env.NODE_ENV !== 'production') {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function')
    }
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  })
  if (superClass) {
    var _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(subClass, superClass) {
      subClass.__proto__ = superClass
      return subClass
    }
    return _setPrototypeOf(subClass, superClass)
  }
}

export function _extends() {
  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

export /*#__PURE__*/ function objectWithoutProperties(source, excluded) {
  if (source == null) return {}
  var target = {}
  var sourceKeys = Object.keys(source)
  var key, i
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i]
    if (excluded.indexOf(key) >= 0) continue
    target[key] = source[key]
  }
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i]
      if (excluded.indexOf(key) >= 0) continue
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue
      target[key] = source[key]
    }
  }
  return target
}

export /*#__PURE__*/ function possibleConstructorReturn(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call
  }
  if (process.env.NODE_ENV !== 'production') {
    if (self === void 0) {
      throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
    }
  }
  return self
}
