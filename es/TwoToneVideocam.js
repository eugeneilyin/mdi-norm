import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneVideocam =
/*#__PURE__*/
function TwoToneVideocam(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M5 8h10v8H5z"
  }), h("path", {
    d: "M17 7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zm-2 9H5V8h10z"
  }));
};