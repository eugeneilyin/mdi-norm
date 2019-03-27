import React from 'react';
import { Icon } from './Icon';
import { ck, cn } from './fragments';
export var TwoToneAudiotrack =
/*#__PURE__*/
function TwoToneAudiotrack(props) {
  return React.createElement(Icon, props, React.createElement("circle", {
    opacity: ".3",
    cx: "10",
    cy: "17",
    r: "2"
  }), React.createElement("path", {
    d: "M10 21" + ck + "V7h4V3h-6v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4zm0-6" + cn + "z"
  }));
};