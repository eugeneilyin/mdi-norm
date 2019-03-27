import React from 'react';
import { Icon } from './Icon';
import { bft } from './fragments';
export var TwoToneFolderOpen =
/*#__PURE__*/
function TwoToneFolderOpen(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M4 8h16v10H4z"
  }), React.createElement("path", {
    d: bft + "V8h16z"
  }));
};