import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneViewColumn =
/*#__PURE__*/
function TwoToneViewColumn(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M6 7h3v9H6zm5 0h3v9h-3zm5 0h3v9h-3z"
  }), h("path", {
    d: "M4 5v13h17V5zm5 11H6V7h3zm5 0h-3V7h3zm5 0h-3V7h3z"
  }));
};