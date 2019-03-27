import React from 'react';
import { Icon } from './Icon';
import { ih, vs, if_ } from './fragments';
export var TwoToneMouse =
/*#__PURE__*/
function TwoToneMouse(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M13 3.16V9h5c-.04-2.94-2.19-5.37-5-5.84zm-2 0C8.19 3.63 6.04 6.06 6 9h5zM11 11H6v4" + vs + "v-4z"
  }), React.createElement("path", {
    d: "M20 9c-.04-4.39-3.6-7.93-8-7.93S4.04 4.61 4 9v6" + if_ + "zm-7-5.84c2.81.47 4.96 2.9 5 5.84h-5zm-2 0V9H6c.04-2.94 2.19-5.37 5-5.84zM18 15" + ih + "s-6-2.69-6-6v-4h12z"
  }));
};