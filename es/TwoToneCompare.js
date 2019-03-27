import React from 'react';
import { Icon } from './Icon';
import { bd, br } from './fragments';
export var TwoToneCompare =
/*#__PURE__*/
function TwoToneCompare(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M19 5h-5v7l5 6zm-9 13v-6l-5 6z"
  }), React.createElement("path", {
    d: "M19 3h-5v2h5v13l-5-6v9h5" + br + "m-7-2h-2v2H5" + bd + "h5v2h2zm-2 17H5l5-6z"
  }));
};