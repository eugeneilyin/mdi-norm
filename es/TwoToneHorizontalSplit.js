import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneHorizontalSplit =
/*#__PURE__*/
function TwoToneHorizontalSplit(props) {
  return h(Icon, props, h("path", {
    d: "M19 15v2H5v-2h14m2-10H3v2h18zm0 4H3v2h18zm0 4H3v6h18z"
  }), h("path", {
    opacity: ".3",
    d: "M5 15h14v2H5z"
  }));
};