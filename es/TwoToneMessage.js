import React from 'react';
import { Icon } from './Icon';
import { a, b, bm, bgu, bkq } from './fragments';
export var TwoToneMessage =
/*#__PURE__*/
function TwoToneMessage(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M20 4H4v13.17L5.17 16H20zm-2 10" + bgu
  }), React.createElement("path", {
    d: "M20 18" + a + "V4" + b + "H4" + bm + "L2 22l4-4zm-16-.83V4h16v12H5.17zM6 12" + bkq + "m0-3h12v2H6z"
  }));
};