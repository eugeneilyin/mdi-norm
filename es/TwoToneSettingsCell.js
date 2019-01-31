import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneSettingsCell =
/*#__PURE__*/
function TwoToneSettingsCell(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M8 17h8v1H8zM8 2h8v1H8z"
  }), h("path", {
    d: "M7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 18H8v-1h8zm0-3H8V5h8zm0-12H8V2h8z"
  }));
};