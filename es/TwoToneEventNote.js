import React from 'react';
import { Icon } from './Icon';
import { sj } from './fragments';
export var TwoToneEventNote =
/*#__PURE__*/
function TwoToneEventNote(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M5 5h14v2H5z"
  }), React.createElement("path", {
    d: sj + "m0-12H5V5h14zM7 11h10v2H7zm0 4h7v2H7z"
  }));
};