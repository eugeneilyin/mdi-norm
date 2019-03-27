import React from 'react';
import { Icon } from './Icon';
import { pq, bpc } from './fragments';
export var TwoToneRouter =
/*#__PURE__*/
function TwoToneRouter(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M15 15H5v4h14v-4zm-7 3" + bpc
  }), React.createElement("path", {
    d: pq
  }));
};