import React from 'react';
import { Icon } from './Icon';
import { dd, mw, bdf, bnj } from './fragments';
export var TwoToneSpeaker =
/*#__PURE__*/
function TwoToneSpeaker(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M7 4v16h10V4zm5 1" + bnj + mw + "s.89-2 2-2zm0 14" + dd
  }), React.createElement("path", {
    d: bdf
  }));
};