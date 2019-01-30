import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneAudiotrack =
/*#__PURE__*/
function TwoToneAudiotrack(props) {
  return h(Icon, props, h("circle", {
    opacity: ".3",
    cx: "10",
    cy: "17",
    r: "2"
  }), h("path", {
    d: "M10 21c2.21 0 4-1.79 4-4V7h4V3h-6v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"
  }));
};