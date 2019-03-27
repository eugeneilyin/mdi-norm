import React from 'react';
import { Icon } from './Icon';
import { qr } from './fragments';
export var TwoToneLayersClear =
/*#__PURE__*/
function TwoToneLayersClear(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M12 13.47l.67-.53-5.02-5.02L6.26 9zm0-8.94l-1.17.91 5.02 5.03L17.74 9z"
  }), React.createElement("path", {
    d: qr
  }));
};