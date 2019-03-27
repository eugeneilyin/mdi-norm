import React from 'react';
import { Icon } from './Icon';
import { dp, bcw } from './fragments';
export var TwoToneExposure =
/*#__PURE__*/
function TwoToneExposure(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M19 19V5L5 19zm-4.5-4.5v-2H16v2h2V16h-2v2h-1.5v-2h-2v-1.5z"
  }), React.createElement("path", {
    d: dp + bcw
  }));
};