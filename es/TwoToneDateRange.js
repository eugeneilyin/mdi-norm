import React from 'react';
import { Icon } from './Icon';
import { bld, bnw } from './fragments';
export var TwoToneDateRange =
/*#__PURE__*/
function TwoToneDateRange(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M5 8h14V6H5z"
  }), React.createElement("path", {
    d: "M7 11h2v2H7zm12-7" + bld + "m-4 3" + bnw
  }));
};