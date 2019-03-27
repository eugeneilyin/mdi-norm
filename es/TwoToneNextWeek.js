import React from 'react';
import { Icon } from './Icon';
import { od } from './fragments';
export var TwoToneNextWeek =
/*#__PURE__*/
function TwoToneNextWeek(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M4 20h16V9H4zm6-8.5l1-1 4 4-4 4-1-1 3-3-3-3z"
  }), React.createElement("path", {
    d: "M11 18.5l4-4-4-4-1 1 3 3-3 3z" + od + "m10 15H4V9h16z"
  }));
};