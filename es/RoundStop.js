import React from 'react';
import { Icon } from './Icon';
import { bo, cm, ez, nr } from './fragments';
export var RoundStop =
/*#__PURE__*/
function RoundStop(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    d: "M8 6h8" + cm + "v8" + nr + "H8" + bo + "V8" + ez + "z"
  }));
};