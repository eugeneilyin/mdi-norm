"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = require("react");

var Icon =
/*#__PURE__*/
function (_C) {
  _babelHelpers.inherits(Icon, _C);

  function Icon() {
    _babelHelpers.classCallCheck(this, Icon);

    return _babelHelpers.possibleConstructorReturn(this, _babelHelpers.getPrototypeOf(Icon).apply(this, arguments));
  }

  _babelHelpers.createClass(Icon, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var thisProps = this.props;

      if (thisProps === nextProps) {
        return false;
      }

      var thisKeys = Object.keys(thisProps);
      var nextKeys = Object.keys(nextProps);

      if (thisKeys.length !== nextKeys.length) {
        return true;
      }

      for (var i = 0; i < thisKeys.length; i++) {
        var key = thisKeys[i];

        if (key === 'children') {
          continue;
        }

        if (!nextProps.hasOwnProperty(key)) {
          return true;
        }

        var thisValue = thisProps[key];
        var nextValue = nextProps[key];

        if (thisValue !== nextValue) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          component = _this$props.component,
          title = _this$props.title,
          fill = _this$props.fill,
          opacity = _this$props.opacity,
          shade = _this$props.shade,
          state = _this$props.state,
          size = _this$props.size,
          viewBox = _this$props.viewBox,
          children = _this$props.children,
          rest = _babelHelpers.objectWithoutProperties(_this$props, ["component", "title", "fill", "opacity", "shade", "state", "size", "viewBox", "children"]);

      var props = title != null ? {
        role: 'img',
        'aria-label': 'title'
      } : {
        'aria-hidden': true
      };
      props.fill = fill != null ? fill : shade == null || shade === 'on-light' ? state === 'error' ? '#B00020' : '#000000' : state === 'error' ? '#FF6E6E' : '#FFFFFF';
      props.opacity = opacity != null ? opacity : shade == null || shade === 'on-light' ? state === 'focused' ? '.87' : state === 'active' ? '.54' : state === 'inactive' ? '.38' : state === 'error' ? '1' : '.54' : state === 'focused' ? '1' : state === 'active' ? '.7' : state === 'inactive' ? '.5' : state === 'error' ? '1' : '.7';
      props.width = props.height = size != null ? size : 24;
      props.viewBox = viewBox != null ? viewBox : '0 0 24 24';
      return (0, _react.createElement)(component != null ? component : 'svg', Object.assign(props, rest), title != null ? [(0, _react.createElement)('title', {
        key: title
      }, title), children] : children);
    }
  }]);

  return Icon;
}(_react.Component);

exports.Icon = Icon;