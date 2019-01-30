import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneStop =
/*#__PURE__*/
function TwoToneStop(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M8 8h8v8H8z"
  }), h("path", {
    d: "M6 18h12V6H6zM8 8h8v8H8z"
  }));
};