import React from 'react';
import { Icon } from './Icon';
import { qi, blc } from './fragments';
export var TwoToneImage =
/*#__PURE__*/
function TwoToneImage(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: blc + "m4-5.86l2.14 2.58 3-3.87L18 17H6z"
  }), React.createElement("path", {
    d: qi + "m-4.86-7.14l-3 3.86L9 13.14 6 17h12z"
  }));
};