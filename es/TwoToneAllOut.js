import React from 'react';
import { Icon } from './Icon';
import { bib } from './fragments';
export var TwoToneAllOut =
/*#__PURE__*/
function TwoToneAllOut(props) {
  return React.createElement(Icon, props, React.createElement("circle", {
    opacity: ".3",
    cx: "12",
    cy: "12",
    r: "5"
  }), React.createElement("path", {
    d: bib
  }));
};