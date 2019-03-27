import React from 'react';
import { Icon } from './Icon';
import { ce, ck, cn, dd, fw } from './fragments';
export var TwoToneHdrStrong =
/*#__PURE__*/
function TwoToneHdrStrong(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M17 8" + ce
  }), React.createElement("path", {
    d: "M17 6" + fw + "m0 10" + dd + "M5 16" + ck + "S7.21 8 5 8s-4 1.79-4 4 1.79 4 4 4zm0-6" + cn + "z"
  }));
};