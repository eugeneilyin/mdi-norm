import React from 'react';
import { Icon } from './Icon';
import { cr, dd, mf, bme } from './fragments';
export var FilledSpeakerGroup =
/*#__PURE__*/
function FilledSpeakerGroup(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    d: mf + "M14 3" + bme + "m0 13.5" + dd
  }), React.createElement("circle", {
    cx: "14",
    cy: "12.5",
    r: "2.5"
  }), React.createElement("path", {
    d: "M6 5H4v16" + cr + "h10v-2H6z"
  }));
};