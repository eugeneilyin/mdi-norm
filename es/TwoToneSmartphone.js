import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneSmartphone =
/*#__PURE__*/
function TwoToneSmartphone(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M7 5h10v14H7z"
  }), h("path", {
    d: "M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10z"
  }));
};