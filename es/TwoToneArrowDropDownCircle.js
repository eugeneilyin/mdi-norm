import React from 'react';
import { Icon } from './Icon';
import { cs, ku } from './fragments';
export var TwoToneArrowDropDownCircle =
/*#__PURE__*/
function TwoToneArrowDropDownCircle(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: cs + "m0 11l-4-4h8z"
  }), React.createElement("path", {
    d: ku + "m0-5l4-4H8z"
  }));
};