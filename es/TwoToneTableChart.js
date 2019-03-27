import React from 'react';
import { Icon } from './Icon';
import { bd, br } from './fragments';
export var TwoToneTableChart =
/*#__PURE__*/
function TwoToneTableChart(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M5 5h15v3H5zm12 5h3v9h-3zm-7 0h5v9h-5zm-5 0h3v9H5z"
  }), React.createElement("path", {
    d: "M20 3H5" + bd + "h15" + br + "M8 19H5v-9h3zm7 0h-5v-9h5zm5 0h-3v-9h3zm0-11H5V5h15z"
  }));
};