import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneAnnouncement =
/*#__PURE__*/
function TwoToneAnnouncement(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M4 4v13.17l.59-.59.58-.58H20V4zm9 11h-2v-2h2zm0-4h-2V5h2z"
  }), h("path", {
    d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16zM11 5h2v6h-2zm0 8h2v2h-2z"
  }));
};