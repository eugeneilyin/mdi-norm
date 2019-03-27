import React from 'react';
import { Icon } from './Icon';
import { bj, en, eo } from './fragments';
export var TwoToneEvStation =
/*#__PURE__*/
function TwoToneEvStation(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M8 13.5H6V19h6v-8l-4 7zm-2 0L10 6v5h2V5H6z"
  }), React.createElement("path", {
    d: "M12 3" + eo + en + "zm0 8v8H6V5h6zm6-1" + bj + "m-8-4l-4 7.5h2V18l4-7h-2z"
  }));
};