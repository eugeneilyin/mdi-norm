import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneNote =
/*#__PURE__*/
function TwoToneNote(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M15 6H4v12.01h16V11h-5z"
  }), h("path", {
    d: "M4 4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99h16c1.1 0 2-.9 2-2v-8l-6-6zm16 14.01H4V6h11v5h5z"
  }));
};