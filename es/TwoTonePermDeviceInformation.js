import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoTonePermDeviceInformation =
/*#__PURE__*/
function TwoTonePermDeviceInformation(props) {
  return h(Icon, props, h("path", {
    opacity: ".3",
    d: "M7 20h10v1H7zM7 3h10v1H7z"
  }), h("path", {
    d: "M11 7h2v2h-2zm0 4h2v6h-2zm6-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 21H7v-1h10zm0-3H7V6h10zm0-14H7V3h10z"
  }));
};