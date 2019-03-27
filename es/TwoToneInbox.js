import React from 'react';
import { Icon } from './Icon';
import { c, cr, nr, vl } from './fragments';
export var TwoToneInbox =
/*#__PURE__*/
function TwoToneInbox(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M12.01 18c-1.48 0-2.75-.81-3.45-2H5v3h14v-3h-3.55c-.69 1.19-1.97 2-3.44 2z"
  }), React.createElement("path", {
    d: "M19 3H5" + c + "v14" + cr + "h14" + vl + "h-5" + nr + "s-2-.9-2-2H5V5h14z"
  }));
};