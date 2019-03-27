import React from 'react';
import { Icon } from './Icon';
import { cf, bja } from './fragments';
export var TwoToneAspectRatio =
/*#__PURE__*/
function TwoToneAspectRatio(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M3 19.01h18V4.99H3zM14 15h3v-3h2v5h-5zM5 7h5v2H7v3H5z"
  }), React.createElement("path", {
    d: cf + bja + "M7 9h3V7H5v5h2zm12 3h-2v3h-3v2h5z"
  }));
};