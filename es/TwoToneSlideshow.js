import React from 'react';
import { Icon } from './Icon';
import { qi, blc } from './fragments';
export var TwoToneSlideshow =
/*#__PURE__*/
function TwoToneSlideshow(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: blc + "m5-11l5 4-5 4z"
  }), React.createElement("path", {
    d: qi + "M10 8v8l5-4z"
  }));
};