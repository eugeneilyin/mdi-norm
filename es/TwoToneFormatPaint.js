import React from 'react';
import { Icon } from './Icon';
import { g, bog } from './fragments';
export var TwoToneFormatPaint =
/*#__PURE__*/
function TwoToneFormatPaint(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M6 4h10v2H6z"
  }), React.createElement("path", {
    d: "M17 2" + bog + "h-3V3" + g + "zm-1 4H6V4h10z"
  }));
};