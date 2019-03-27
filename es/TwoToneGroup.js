import React from 'react';
import { Icon } from './Icon';
import { jz } from './fragments';
export var TwoToneGroup =
/*#__PURE__*/
function TwoToneGroup(props) {
  return React.createElement(Icon, props, React.createElement("circle", {
    opacity: ".3",
    cx: "9",
    cy: "8.5",
    r: "1.5"
  }), React.createElement("path", {
    opacity: ".3",
    d: "M4.34 17h9.32c-.84-.58-2.87-1.25-4.66-1.25s-3.82.67-4.66 1.25z"
  }), React.createElement("path", {
    d: jz
  }));
};