import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneDescription =
/*#__PURE__*/
function TwoToneDescription(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M13 4H6v16h12V9h-5zm3 14H8v-2h8zm0-6v2H8v-2z"
  }), h("path", {
    d: "M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5z"
  }));
};