import React from 'react';
import { Icon } from './Icon';
import { dp, bmv } from './fragments';
export var TwoToneIso =
/*#__PURE__*/
function TwoToneIso(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M19 19V5L5 19zm-2-3.5V17h-5v-1.5z"
  }), React.createElement("path", {
    d: "M12 15.5h5V17h-5z" + dp + bmv
  }));
};