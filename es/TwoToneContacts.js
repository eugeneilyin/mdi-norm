import React from 'react';
import { Icon } from './Icon';
import { cy, hx, sq, bnf } from './fragments';
export var TwoToneContacts =
/*#__PURE__*/
function TwoToneContacts(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M20 6H4v12h16zm-8 1" + hx + "S13.38 12 12 12s-2.5-1.12-2.5-2.5S10.62 7 12 7zm5 10H7v-1.01C7 13.9 10.31 13 12 13s5 .9 5 2.99z"
  }), React.createElement("path", {
    d: "M4 20h16" + sq + "H4" + cy + "zM4 6h16v12H4zm0-6" + bnf + "m0 4.5c-1.69 0-5 .9-5 2.99V17h10v-1.01C17 13.9 13.69 13 12 13zm-3.19 2.5c.61-.52 2.03-1 3.19-1 1.17 0 2.59.48 3.2 1z"
  }));
};