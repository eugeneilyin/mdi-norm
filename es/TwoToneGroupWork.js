import React from 'react';
import { Icon } from './Icon';
import { bp, cs, ku } from './fragments';
export var TwoToneGroupWork =
/*#__PURE__*/
function TwoToneGroupWork(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: cs + "M8 16" + bp + "m4-6" + bp + "m4 6" + bp
  }), React.createElement("path", {
    d: ku
  }), React.createElement("circle", {
    cx: "8",
    cy: "14",
    r: "2"
  }), React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "2"
  }), React.createElement("circle", {
    cx: "16",
    cy: "14",
    r: "2"
  }));
};