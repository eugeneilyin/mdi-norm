import React from 'react';
import { Icon } from './Icon';
import { bv, na, qp } from './fragments';
export var RoundPhotoCamera =
/*#__PURE__*/
function RoundPhotoCamera(props) {
  return React.createElement(Icon, props, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), React.createElement("path", {
    d: "M20 4" + qp + "L7.17 4" + na + "m-8 13" + bv
  }));
};