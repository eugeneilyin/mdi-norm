import React from 'react';
import { Icon } from './Icon';
import { bbo } from './fragments';
export var TwoToneScanner =
/*#__PURE__*/
function TwoToneScanner(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M5 14v4h14v-4zm3 3H6v-2h2zm10 0h-8v-2h8z"
  }), React.createElement("path", {
    d: bbo + "M19 18H5v-4h14zM6 15h2v2H6zm4 0h8v2h-8z"
  }));
};