import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneMarkunreadMailbox =
/*#__PURE__*/
function TwoToneMarkunreadMailbox(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M10 12H6V8H4v12h16V8H10z"
  }), h("path", {
    d: "M20 6H10v2h10v12H4V8h2v4h2V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"
  }));
};