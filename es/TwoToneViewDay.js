import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneViewDay =
/*#__PURE__*/
function TwoToneViewDay(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M4 10h15v4H4z"
  }), h("path", {
    d: "M2 18h19v2H2zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6H4v-4h15zM2 4h19v2H2z"
  }));
};