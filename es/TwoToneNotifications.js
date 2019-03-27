import React from 'react';
import { Icon } from './Icon';
import { a, d, hc, bhl } from './fragments';
export var TwoToneNotifications =
/*#__PURE__*/
function TwoToneNotifications(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: bhl
  }), React.createElement("path", {
    d: "M12 22" + a + "h-4" + d + "zm6-6" + hc
  }));
};