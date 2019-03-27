import React from 'react';
import { Icon } from './Icon';
import { bgi } from './fragments';
export var TwoToneDeleteSweep =
/*#__PURE__*/
function TwoToneDeleteSweep(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M5 10h6v8H5z"
  }), React.createElement("path", {
    d: bgi + "m2-8h6v8H5zm5-6H6L5 5H2v2h12V5h-3z"
  }));
};