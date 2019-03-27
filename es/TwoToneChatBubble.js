import React from 'react';
import { Icon } from './Icon';
import { kw } from './fragments';
export var TwoToneChatBubble =
/*#__PURE__*/
function TwoToneChatBubble(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M4 18l2-2h14V4H4z"
  }), React.createElement("path", {
    d: kw + "m0 14H6l-2 2V4h16z"
  }));
};