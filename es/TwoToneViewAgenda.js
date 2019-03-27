import React from 'react';
import { Icon } from './Icon';
import { g, bab } from './fragments';
export var TwoToneViewAgenda =
/*#__PURE__*/
function TwoToneViewAgenda(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    d: "M20 3" + bab + "V4" + g + "zm-1 6H4V5h15zm1 4" + bab + "v-6" + g + "zm-1 6H4v-4h15z"
  }), React.createElement("path", {
    opacity: ".3",
    d: "M4 15h15v4H4zM4 5h15v4H4z"
  }));
};