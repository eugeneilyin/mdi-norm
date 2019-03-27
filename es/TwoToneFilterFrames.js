import React from 'react';
import { Icon } from './Icon';
import { bar } from './fragments';
export var TwoToneFilterFrames =
/*#__PURE__*/
function TwoToneFilterFrames(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M8 10h8v6H8z"
  }), React.createElement("path", {
    d: bar + "M6 18h12V8H6zm2-8h8v6H8z"
  }));
};