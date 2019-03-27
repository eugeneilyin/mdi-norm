import React from 'react';
import { Icon } from './Icon';
import { dr, mt } from './fragments';
export var TwoToneGpsFixed =
/*#__PURE__*/
function TwoToneGpsFixed(props) {
  return React.createElement(Icon, props, React.createElement("circle", {
    opacity: ".3",
    cx: "12",
    cy: "12",
    r: "2"
  }), React.createElement("path", {
    d: "M12 8" + dr + "m8.94-3" + mt
  }));
};