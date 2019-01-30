import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneCalendarViewDay =
/*#__PURE__*/
function TwoToneCalendarViewDay(props) {
  return h(Icon, props, h("path", {
    d: "M3 17h18v2H3zm16-5v1H5v-1h14m2-2H3v5h18zM3 6h18v2H3z"
  }), h("path", {
    opacity: ".3",
    d: "M5 12h14v1H5z"
  }));
};