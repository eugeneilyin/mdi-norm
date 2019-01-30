import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneVolumeMute =
/*#__PURE__*/
function TwoToneVolumeMute(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M9 13h2.83L14 15.17V8.83L11.83 11H9z"
  }), h("path", {
    d: "M7 9v6h4l5 5V4l-5 5zm7-.17v6.34L11.83 13H9v-2h2.83z"
  }));
};