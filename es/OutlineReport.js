import React from 'react';
import { Icon } from './Icon';
import { bjo } from './fragments';
export var OutlineReport =
/*#__PURE__*/
function OutlineReport(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    d: bjo
  }), React.createElement("circle", {
    cx: "12",
    cy: "16",
    r: "1"
  }), React.createElement("path", {
    d: "M11 7h2v7h-2z"
  }));
};