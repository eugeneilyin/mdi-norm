import React from 'react';
import { Icon } from './Icon';
import { bow } from './fragments';
export var TwoTonePermDeviceInformation =
/*#__PURE__*/
function TwoTonePermDeviceInformation(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M7 20h10v1H7zM7 3h10v1H7z"
  }), React.createElement("path", {
    d: bow + "m0-14H7V3h10z"
  }));
};