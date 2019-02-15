import { _extends, classCallCheck, createClass, getPrototypeOf, inherits, objectWithoutProperties, possibleConstructorReturn } from "./utils/babelHelpers.js";
import { Component as C, createElement as h } from 'react';
export var Icon =
/*#__PURE__*/
function (_C) {
  inherits(Icon, _C);

  function Icon() {
    classCallCheck(this, Icon);
    return possibleConstructorReturn(this, getPrototypeOf(Icon).apply(this, arguments));
  }

  createClass(Icon, [{
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
          rest = objectWithoutProperties(_this$props, ["component", "title", "fill", "opacity", "shade", "state", "size", "viewBox", "children"]);
      var props = title != null ? {
        role: 'img',
        'aria-label': 'title'
      } : {
        'aria-hidden': true
      };
      props.fill = fill != null ? fill : shade === 'on-light' ? state === 'error' ? '#B00020' : '#000000' : shade === 'on-dark' ? state === 'error' ? '#FF6E6E' : '#FFFFFF' : 'currentColor';
      props.opacity = opacity != null ? opacity : shade === 'on-light' ? state === 'focused' ? '.87' : state === 'active' ? '.54' : state === 'inactive' ? '.38' : state === 'error' ? '1' : undefined : shade === 'on-dark' ? state === 'focused' ? '1' : state === 'active' ? '.7' : state === 'inactive' ? '.5' : state === 'error' ? '1' : undefined : undefined;
      props.width = props.height = size != null ? size : 24;
      props.viewBox = viewBox != null ? viewBox : '0 0 24 24';
      return h(component != null ? component : 'svg', _extends({}, props, rest), title != null ? [h('title', {
        key: title
      }, title), children] : children);
    }
  }]);
  return Icon;
}(C);