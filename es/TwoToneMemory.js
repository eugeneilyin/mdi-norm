import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneMemory =
/*#__PURE__*/
function TwoToneMemory(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M7 17h10V7H7zm2-8h6v6H9z"
  }), h("path", {
    d: "M21 11V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2zm-4 6H7V7h10zm-2-8H9v6h6zm-2 4h-2v-2h2z"
  }));
};