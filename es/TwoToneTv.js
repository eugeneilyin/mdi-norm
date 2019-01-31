import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneTv =
/*#__PURE__*/
function TwoToneTv(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M3 5h18v12H3z"
  }), h("path", {
    d: "M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18z"
  }));
};