import React from 'react';
import { Icon } from './Icon';
import { bd, kb } from './fragments';
export var TwoToneDock =
/*#__PURE__*/
function TwoToneDock(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M8 5h8v10H8z"
  }), React.createElement("path", {
    d: "M8 21h8v2H8zm8-19.99L8 1" + bd + "h8" + kb + "M16 15H8V5h8z"
  }));
};