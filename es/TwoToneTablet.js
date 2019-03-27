import React from 'react';
import { Icon } from './Icon';
import { b, cy, ke } from './fragments';
export var TwoToneTablet =
/*#__PURE__*/
function TwoToneTablet(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M5 6h14v12H5z"
  }), React.createElement("path", {
    d: "M21 4H3" + cy + "h18" + ke + "L23 6" + b + "zm-2 14H5V6h14z"
  }));
};