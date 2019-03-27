import React from 'react';
import { Icon } from './Icon';
import { cy, sq } from './fragments';
export var TwoTonePanorama =
/*#__PURE__*/
function TwoTonePanorama(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M3 18h18V6H3zm5.5-5.5l2.5 3.01L14.5 11l4.5 6H5z"
  }), React.createElement("path", {
    d: "M21 4H3" + cy + "h18" + sq + "zm0 14H3V6h18zm-6.5-7L11 15.51 8.5 12.5 5 17h14z"
  }));
};