import React from 'react';
import { Icon } from './Icon';
import { a, c, mk } from './fragments';
export var TwoToneNote =
/*#__PURE__*/
function TwoToneNote(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M15 6H4v12.01h16V11h-5z"
  }), React.createElement("path", {
    d: "M4 4" + c + "v12.01" + mk + "h16" + a + "v-8l-6-6zm16 14.01H4V6h11v5h5z"
  }));
};