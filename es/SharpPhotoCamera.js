import React from 'react';
import { Icon } from './Icon';
import { bv } from './fragments';
export var SharpPhotoCamera =
/*#__PURE__*/
function SharpPhotoCamera(props) {
  return React.createElement(Icon, props, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), React.createElement("path", {
    d: "M9 2L7.17 4H2v16h20V4h-5.17L15 2zm3 15" + bv
  }));
};