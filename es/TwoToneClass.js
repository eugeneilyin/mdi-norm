import React from 'react';
import { Icon } from './Icon';
import { zp } from './fragments';
export var TwoToneClass =
/*#__PURE__*/
function TwoToneClass(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M13 13l-3-2.25L7 13V4H6v16h12V4h-5z"
  }), React.createElement("path", {
    d: zp
  }));
};