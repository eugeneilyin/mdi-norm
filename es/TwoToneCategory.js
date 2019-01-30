import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneCategory =
/*#__PURE__*/
function TwoToneCategory(props) {
  return h(Icon, props, h("circle", {
    opacity: ".3",
    cx: "17.5",
    cy: "17.5",
    r: "2.5"
  }), h("path", {
    opacity: ".3",
    d: "M5 15.5h4v4H5zm7-9.66L10.07 9h3.86z"
  }), h("path", {
    d: "M12 2l-5.5 9h11zm0 3.84L13.93 9h-3.87zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM11 13.5H3v8h8zm-2 6H5v-4h4z"
  }));
};