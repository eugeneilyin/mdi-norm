import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoTonePictureInPicture =
/*#__PURE__*/
function TwoTonePictureInPicture(props) {
  return h(Icon, props, h("path", {
    d: "M19 7h-8v6h8zm-2 4h-4V9h4z"
  }), h("path", {
    opacity: ".3",
    d: "M13 9h4v2h-4z"
  }), h("path", {
    d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18z"
  }));
};