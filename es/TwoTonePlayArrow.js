import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoTonePlayArrow =
/*#__PURE__*/
function TwoTonePlayArrow(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M10 8.64v6.72L15.27 12z"
  }), h("path", {
    d: "M8 19l11-7L8 5zm2-10.36L15.27 12 10 15.36z"
  }));
};