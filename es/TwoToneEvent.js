import React from 'react';
import { Icon } from './Icon';
import { bld } from './fragments';
export var TwoToneEvent =
/*#__PURE__*/
function TwoToneEvent(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M5 8h14V6H5z"
  }), React.createElement("path", {
    d: "M19 4" + bld + "m-7 5h5v5h-5z"
  }));
};