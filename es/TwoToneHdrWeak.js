import React from 'react';
import { Icon } from './Icon';
import { dd, dr, fw } from './fragments';
export var TwoToneHdrWeak =
/*#__PURE__*/
function TwoToneHdrWeak(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    d: "M17 6" + fw + "m0 10" + dd
  }), React.createElement("circle", {
    opacity: ".3",
    cx: "5",
    cy: "12",
    r: "2"
  }), React.createElement("path", {
    d: "M5 8" + dr
  }));
};