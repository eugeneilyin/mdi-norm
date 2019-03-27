import React from 'react';
import { Icon } from './Icon';
import { im } from './fragments';
export var OutlineDepartureBoard =
/*#__PURE__*/
function OutlineDepartureBoard(props) {
  return React.createElement(Icon, props, React.createElement("circle", {
    cx: "5.5",
    cy: "16.5",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "12.5",
    cy: "16.5",
    r: "1.5"
  }), React.createElement("path", {
    d: im
  }));
};