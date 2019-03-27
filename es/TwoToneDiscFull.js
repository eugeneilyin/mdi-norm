import React from 'react';
import { Icon } from './Icon';
import { bp, dm, dn, ec, fs, fw } from './fragments';
export var TwoToneDiscFull =
/*#__PURE__*/
function TwoToneDiscFull(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M10 6" + fw + "m0 8" + bp
  }), React.createElement("path", {
    d: "M20 14" + fs + "M10 4" + ec + "m0 14" + dm + "M20 7h2v5h-2zm-10 3" + dn
  }));
};