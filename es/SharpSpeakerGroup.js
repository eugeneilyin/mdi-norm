import React from 'react';
import { Icon } from './Icon';
import { dd, bme } from './fragments';
export var SharpSpeakerGroup =
/*#__PURE__*/
function SharpSpeakerGroup(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    d: "M20 1H8v17.99h12zm-6 2" + bme + "m0 13.5" + dd
  }), React.createElement("circle", {
    cx: "14",
    cy: "12.5",
    r: "2.5"
  }), React.createElement("path", {
    d: "M6 5H4v18h12v-2H6z"
  }));
};