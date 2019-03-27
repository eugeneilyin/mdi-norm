import React from 'react';
import { Icon } from './Icon';
import { jl, bif } from './fragments';
export var RoundMessage =
/*#__PURE__*/
function RoundMessage(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    d: jl + "m-3 12" + bif + "m0-3" + bif + "m0-3" + bif
  }));
};