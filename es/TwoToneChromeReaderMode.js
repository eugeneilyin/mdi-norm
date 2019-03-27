import React from 'react';
import { Icon } from './Icon';
import { c, d, sq } from './fragments';
export var TwoToneChromeReaderMode =
/*#__PURE__*/
function TwoToneChromeReaderMode(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M3 6h8v13H3z"
  }), React.createElement("path", {
    d: "M21 4H3" + c + "v13" + d + "h18" + sq + "zM11 19H3V6h8zm10 0h-8V6h8zm-7-9.5h6V11h-6zm0 2.5h6v1.5h-6zm0 2.5h6V16h-6z"
  }));
};