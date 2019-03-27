import React from 'react';
import { Icon } from './Icon';
import { a, gy, ud } from './fragments';
export var RoundNetworkCell =
/*#__PURE__*/
function RoundNetworkCell(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M4.41 22H20" + a + ud + "z"
  }), React.createElement("path", {
    d: "M17 7L3.71 20.29" + gy + "H17z"
  }));
};