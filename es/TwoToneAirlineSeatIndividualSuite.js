import React from 'react';
import { Icon } from './Icon';
import { b, cm, lq, bms } from './fragments';
export var TwoToneAirlineSeatIndividualSuite =
/*#__PURE__*/
function TwoToneAirlineSeatIndividualSuite(props) {
  return React.createElement(Icon, props, React.createElement("circle", {
    opacity: ".3",
    cx: "7",
    cy: "11",
    r: "1"
  }), React.createElement("path", {
    opacity: ".3",
    d: "M19 9h-6v6h8v-4" + b + "z"
  }), React.createElement("path", {
    d: bms + "V7H1v10h22v-6" + lq + "zm2 8h-8V9h6" + cm + "z"
  }));
};