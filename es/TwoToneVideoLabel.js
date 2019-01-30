import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneVideoLabel =
/*#__PURE__*/
function TwoToneVideoLabel(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M3 5h18v11H3z"
  }), h("path", {
    d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V5h18z"
  }));
};