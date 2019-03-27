import React from 'react';
import { Icon } from './Icon';
import { ml } from './fragments';
export var TwoToneLabel =
/*#__PURE__*/
function TwoToneLabel(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M16 7H5v10h11l3.55-5z"
  }), React.createElement("path", {
    d: ml + "L22 12zM16 17H5V7h11l3.55 5z"
  }));
};