import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneWebAsset =
/*#__PURE__*/
function TwoToneWebAsset(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M5 8h14v10H5z"
  }), h("path", {
    d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14z"
  }));
};