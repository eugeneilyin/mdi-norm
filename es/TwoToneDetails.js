import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneDetails =
/*#__PURE__*/
function TwoToneDetails(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M6.38 6L12 16l5.63-10z"
  }), h("path", {
    d: "M3 4l9 16 9-16zm3.38 2h11.25L12 16 6.38 6z"
  }));
};