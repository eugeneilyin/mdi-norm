import React from 'react';
import { Icon } from './Icon';
import { bj, bjo } from './fragments';
export var TwoToneReport =
/*#__PURE__*/
function TwoToneReport(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M9.1 5L5 9.1v5.8L9.1 19h5.8l4.1-4.1V9.1L14.9 5zM12 17" + bj + "m1-3h-2V7h2z"
  }), React.createElement("path", {
    d: bjo
  }), React.createElement("circle", {
    cx: "12",
    cy: "16",
    r: "1"
  }), React.createElement("path", {
    d: "M11 7h2v7h-2z"
  }));
};