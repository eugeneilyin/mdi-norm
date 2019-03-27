import React from 'react';
import { Icon } from './Icon';
import { bdt } from './fragments';
export var TwoToneSettingsCell =
/*#__PURE__*/
function TwoToneSettingsCell(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M8 17h8v1H8zM8 2h8v1H8z"
  }), React.createElement("path", {
    d: bdt
  }));
};