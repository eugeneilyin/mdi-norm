import React from 'react';
import { Icon } from './Icon';
import { dg, dn, nr } from './fragments';
export var FilledDragIndicator =
/*#__PURE__*/
function FilledDragIndicator(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    d: "M11 18" + nr + "s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8" + dn + "m0-6" + dn + "m6 4" + dg + "m0 2" + dn + "m0 6" + dn
  }));
};