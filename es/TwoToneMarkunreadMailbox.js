import React from 'react';
import { Icon } from './Icon';
import { b, gx } from './fragments';
export var TwoToneMarkunreadMailbox =
/*#__PURE__*/
function TwoToneMarkunreadMailbox(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M10 12H6V8H4v12h16V8H10z"
  }), React.createElement("path", {
    d: "M20 6H10v2h10v12H4V8h2v4h2V4h6V0H6v6" + gx + "V8" + b + "z"
  }));
};