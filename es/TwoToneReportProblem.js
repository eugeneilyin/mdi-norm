import React from 'react';
import { Icon } from './Icon';
import { fs, me } from './fragments';
export var TwoToneReportProblem =
/*#__PURE__*/
function TwoToneReportProblem(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M12 5.99L4.47 19h15.06zM13 18" + me + "m-2-4v-4h2v4z"
  }), React.createElement("path", {
    d: "M12 2L1 21h22zm0 3.99L19.53 19H4.47zM11 16" + fs + "m0-6h2v4h-2z"
  }));
};