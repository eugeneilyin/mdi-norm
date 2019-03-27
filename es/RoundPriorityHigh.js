import React from 'react';
import { Icon } from './Icon';
import { b, c, d } from './fragments';
export var RoundPriorityHigh =
/*#__PURE__*/
function RoundPriorityHigh(props) {
  return React.createElement(Icon, props, React.createElement("circle", {
    cx: "12",
    cy: "19",
    r: "2"
  }), React.createElement("path", {
    d: "M12 3" + c + "v8" + d + "s2-.9 2-2V5" + b + "z"
  }));
};