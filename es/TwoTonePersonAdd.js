import React from 'react';
import { Icon } from './Icon';
import { co, wm, bfa } from './fragments';
export var TwoTonePersonAdd =
/*#__PURE__*/
function TwoTonePersonAdd(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M15 16" + bfa
  }), React.createElement("circle", {
    opacity: ".3",
    cx: "15",
    cy: "8",
    r: "2"
  }), React.createElement("path", {
    d: "M15 12" + co + "m0 8" + wm + "m-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"
  }));
};