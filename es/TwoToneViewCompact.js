import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneViewCompact =
/*#__PURE__*/
function TwoToneViewCompact(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M11 13h9v4h-9zm-6 0h4v4H5zm0-6h15v4H5z"
  }), h("path", {
    d: "M3 5v14h19V5zm6 12H5v-4h4zm11 0h-9v-4h9zm0-6H5V7h15z"
  }));
};