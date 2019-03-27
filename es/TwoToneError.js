import React from 'react';
import { Icon } from './Icon';
import { bb, ec, fs, zt } from './fragments';
export var TwoToneError =
/*#__PURE__*/
function TwoToneError(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M12 4" + ec + "m1 13" + zt + "V7h2z"
  }), React.createElement("path", {
    d: "M11.99 2" + bb + "m-1-5" + fs + "m0-8h2v6h-2z"
  }));
};