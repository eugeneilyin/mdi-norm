import React from 'react';
import { Icon } from './Icon';
import { ws, bhk } from './fragments';
export var OutlineLoyalty =
/*#__PURE__*/
function OutlineLoyalty(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    d: bhk
  }), React.createElement("circle", {
    cx: "6.5",
    cy: "6.5",
    r: "1.5"
  }), React.createElement("path", {
    d: ws
  }));
};