import React from 'react';
import { Icon } from './Icon';
import { sm, vm, bdu } from './fragments';
export var TwoToneEditLocation =
/*#__PURE__*/
function TwoToneEditLocation(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M12 3C8.69 3 6 5.69 6 9" + vm + "zm-2.05 9.49" + sm
  }), React.createElement("path", {
    d: bdu
  }));
};