import React from 'react';
import { Icon } from './Icon';
import { cr, cw, dy } from './fragments';
export var OutlineRadio =
/*#__PURE__*/
function OutlineRadio(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    d: "M20 6H8.3l8.26-3.34L15.88 1 3.24 6.15C2.51 6.43 2 7.17 2 8v12" + cr + "h16" + dy + "V8" + cw + "zm0 2v3h-2V9h-2v2H4V8zM4 20v-7h16v7z"
  }), React.createElement("circle", {
    cx: "8",
    cy: "16.48",
    r: "2.5"
  }));
};