import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneAspectRatio =
/*#__PURE__*/
function TwoToneAspectRatio(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M3 19.01h18V4.99H3zM14 15h3v-3h2v5h-5zM5 7h5v2H7v3H5z"
  }), h("path", {
    d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18zM7 9h3V7H5v5h2zm12 3h-2v3h-3v2h5z"
  }));
};