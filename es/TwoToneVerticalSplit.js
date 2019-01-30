import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneVerticalSplit =
/*#__PURE__*/
function TwoToneVerticalSplit(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M15 7h4v10h-4z"
  }), h("path", {
    d: "M3 13h8v2H3zm0 4h8v2H3zm0-8h8v2H3zm0-4h8v2H3zm10 0v14h8V5zm6 12h-4V7h4z"
  }));
};