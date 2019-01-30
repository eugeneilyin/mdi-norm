import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneCallToAction =
/*#__PURE__*/
function TwoToneCallToAction(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M3 19h18V5H3zm2-4h14v3H5z"
  }), h("path", {
    d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18zM5 15h14v3H5z"
  }));
};