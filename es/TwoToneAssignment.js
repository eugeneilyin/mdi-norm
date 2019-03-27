import React from 'react';
import { Icon } from './Icon';
import { mv } from './fragments';
export var TwoToneAssignment =
/*#__PURE__*/
function TwoToneAssignment(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M5 5v14h14V5zm9 12H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"
  }), React.createElement("path", {
    d: "M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7zm12-4" + mv
  }));
};