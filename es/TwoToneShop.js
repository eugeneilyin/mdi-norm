import React from 'react';
import { Icon } from './Icon';
import { bgh } from './fragments';
export var TwoToneShop =
/*#__PURE__*/
function TwoToneShop(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M4 19h16V8H4zM9 9l7.5 4L9 18z"
  }), React.createElement("path", {
    d: bgh + "m10 15H4V8h16zM9 9v9l7.5-5z"
  }));
};