import React from 'react';
import { Icon } from './Icon';
import { co, bdl } from './fragments';
export var TwoTonePermIdentity =
/*#__PURE__*/
function TwoTonePermIdentity(props) {
  return React.createElement(Icon, props, React.createElement("circle", {
    opacity: ".3",
    cx: "12",
    cy: "8",
    r: "2"
  }), React.createElement("path", {
    opacity: ".3",
    d: "M12 15c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2z"
  }), React.createElement("path", {
    d: "M12 12" + co + "m0 7c-2.67 0-8 1.34-8 4v3h16v-3" + bdl
  }));
};