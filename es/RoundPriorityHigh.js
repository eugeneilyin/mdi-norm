import { createElement as h } from 'react';
import { Icon } from './Icon';
export var RoundPriorityHigh =
/*#__PURE__*/
function RoundPriorityHigh(props) {
  return h(Icon, props, h("circle", {
    cx: "12",
    cy: "19",
    r: "2"
  }), h("path", {
    d: "M12 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z"
  }));
};