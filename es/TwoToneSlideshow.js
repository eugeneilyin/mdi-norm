import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneSlideshow =
/*#__PURE__*/
function TwoToneSlideshow(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M5 19h14V5H5zm5-11l5 4-5 4z"
  }), h("path", {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14zM10 8v8l5-4z"
  }));
};