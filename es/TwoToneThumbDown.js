import React from 'react';
import { Icon } from './Icon';
import { nj } from './fragments';
export var TwoToneThumbDown =
/*#__PURE__*/
function TwoToneThumbDown(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M3 12v2h9l-1.34 5.34L15 15V5H6z"
  }), React.createElement("path", {
    d: nj + "m0 12l-4.34 4.34L12 14H3v-2l3-7h9zm4-12h4v12h-4z"
  }));
};