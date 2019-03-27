import React from 'react';
import { Icon } from './Icon';
import { b, bv, gx } from './fragments';
export var FilledPhotoCamera =
/*#__PURE__*/
function FilledPhotoCamera(props) {
  return React.createElement(Icon, props, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3.2"
  }), React.createElement("path", {
    d: "M9 2L7.17 4" + gx + "V6" + b + "h-3.17L15 2zm3 15" + bv
  }));
};