import React from 'react';
import { Icon } from './Icon';
import { qi, blc } from './fragments';
export var TwoToneCheckBox =
/*#__PURE__*/
function TwoToneCheckBox(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: blc + "m2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01z"
  }), React.createElement("path", {
    d: qi + "M17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"
  }));
};