import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneEventNote =
/*#__PURE__*/
function TwoToneEventNote(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M5 5h14v2H5z"
  }), h("path", {
    d: "M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14zm0-12H5V5h14zM7 11h10v2H7zm0 4h7v2H7z"
  }));
};