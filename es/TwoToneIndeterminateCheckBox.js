import React from 'react';
import { Icon } from './Icon';
import { qi, blc } from './fragments';
export var TwoToneIndeterminateCheckBox =
/*#__PURE__*/
function TwoToneIndeterminateCheckBox(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: blc + "m2-8h10v2H7z"
  }), React.createElement("path", {
    d: qi + "M7 11h10v2H7z"
  }));
};