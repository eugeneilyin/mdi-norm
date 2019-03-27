import React from 'react';
import { Icon } from './Icon';
import { co, wm, bfa } from './fragments';
export var TwoTonePerson =
/*#__PURE__*/
function TwoTonePerson(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M12 16" + bfa
  }), React.createElement("circle", {
    opacity: ".3",
    cx: "12",
    cy: "8",
    r: "2"
  }), React.createElement("path", {
    d: "M12 14" + wm + "m6-6" + co
  }));
};