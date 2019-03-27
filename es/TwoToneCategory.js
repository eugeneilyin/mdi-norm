import React from 'react';
import { Icon } from './Icon';
import { gh, tf } from './fragments';
export var TwoToneCategory =
/*#__PURE__*/
function TwoToneCategory(props) {
  return React.createElement(Icon, props, React.createElement("circle", {
    opacity: ".3",
    cx: "17.5",
    cy: "17.5",
    r: "2.5"
  }), React.createElement("path", {
    opacity: ".3",
    d: "M5 15.5h4v4H5zm7-9.66L10.07 9h3.86z"
  }), React.createElement("path", {
    d: "M12 2l-5.5 9h11zm0 3.84L13.93 9h-3.87zM17.5 13" + tf + "m0 7" + gh + "M11 13.5H3v8h8zm-2 6H5v-4h4z"
  }));
};