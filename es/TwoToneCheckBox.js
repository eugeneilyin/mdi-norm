import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneCheckBox =
/*#__PURE__*/
function TwoToneCheckBox(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M5 19h14V5H5zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01z"
  }), h("path", {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"
  }));
};