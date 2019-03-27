import React from 'react';
import { Icon } from './Icon';
import { cx } from './fragments';
export var TwoTonePayment =
/*#__PURE__*/
function TwoTonePayment(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M4 6h16v2H4zm0 6h16v6H4z"
  }), React.createElement("path", {
    d: "M20 4" + cx + "m0 14H4v-6h16zm0-10H4V6h16z"
  }));
};