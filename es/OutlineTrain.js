import React from 'react';
import { Icon } from './Icon';
import { ts } from './fragments';
export var OutlineTrain =
/*#__PURE__*/
function OutlineTrain(props) {
  return React.createElement(Icon, props, React.createElement("circle", {
    cx: "8.5",
    cy: "14.5",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "15.5",
    cy: "14.5",
    r: "1.5"
  }), React.createElement("path", {
    d: ts
  }));
};