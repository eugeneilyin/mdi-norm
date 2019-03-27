import React from 'react';
import { Icon } from './Icon';
import { bbd, blq, bmn } from './fragments';
export var TwoToneNoteAdd =
/*#__PURE__*/
function TwoToneNoteAdd(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M13 4H6v16h12V9h-5zm3 10v2" + blq + "v-3h2v3z"
  }), React.createElement("path", {
    d: "M13 11" + bbd + "h-3zm1-9" + bmn
  }));
};