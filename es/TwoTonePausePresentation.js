import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoTonePausePresentation =
/*#__PURE__*/
function TwoTonePausePresentation(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M3 19h18V5H3zM13 8h2v8h-2zM9 8h2v8H9z"
  }), h("path", {
    d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18zM9 8h2v8H9zm4 0h2v8h-2z"
  }));
};