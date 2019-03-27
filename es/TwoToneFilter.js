import React from 'react';
import { Icon } from './Icon';
import { d, in_ } from './fragments';
export var TwoToneFilter =
/*#__PURE__*/
function TwoToneFilter(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M7 17h14V3H7zm4.25-5.53l1.96 2.36 2.75-3.54L19.5 15h-11z"
  }), React.createElement("path", {
    d: "M1 21" + d + "h16v-2H3V5H1zM21 1" + in_ + "m-5.04-6.71l-2.75 3.54-1.96-2.36L8.5 15h11z"
  }));
};