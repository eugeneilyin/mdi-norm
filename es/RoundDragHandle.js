import React from 'react';
import { Icon } from './Icon';
import { o, bf } from './fragments';
export var RoundDragHandle =
/*#__PURE__*/
function RoundDragHandle(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    d: "M19 9H5" + bf + "h14" + o + "zM5 15h14" + o + "H5" + bf + "z"
  }));
};