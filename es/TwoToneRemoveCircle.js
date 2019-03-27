import React from 'react';
import { Icon } from './Icon';
import { i, y, cs } from './fragments';
export var TwoToneRemoveCircle =
/*#__PURE__*/
function TwoToneRemoveCircle(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: cs + "m5 9H7v-2h10z"
  }), React.createElement("path", {
    d: "M7 11h10v2H7zm5-9" + i + y
  }));
};