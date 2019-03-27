import React from 'react';
import { Icon } from './Icon';
import { wd, we } from './fragments';
export var TwoToneDelete =
/*#__PURE__*/
function TwoToneDelete(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M8 9h8v10H8z"
  }), React.createElement("path", {
    d: "M15.5 4" + wd + "V4z" + we + "V7H6zM8 9h8v10H8z"
  }));
};