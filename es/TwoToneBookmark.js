import React from 'react';
import { Icon } from './Icon';
import { b, c } from './fragments';
export var TwoToneBookmark =
/*#__PURE__*/
function TwoToneBookmark(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M7 17.97l5-2.15 5 2.15V5H7z"
  }), React.createElement("path", {
    d: "M17 3H7" + c + "v16l7-3 7 3V5" + b + "zm0 14.97l-5-2.14-5 2.14V5h10z"
  }));
};