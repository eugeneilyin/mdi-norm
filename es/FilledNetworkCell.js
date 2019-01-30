import { createElement as h } from 'react';
import { Icon } from './Icon';
export var FilledNetworkCell =
/*#__PURE__*/
function FilledNetworkCell(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M2 22h20V2z"
  }), h("path", {
    d: "M17 7L2 22h15z"
  }));
};