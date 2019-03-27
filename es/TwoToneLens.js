import React from 'react';
import { Icon } from './Icon';
import { cs, ku } from './fragments';
export var TwoToneLens =
/*#__PURE__*/
function TwoToneLens(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: cs
  }), React.createElement("path", {
    d: ku
  }));
};