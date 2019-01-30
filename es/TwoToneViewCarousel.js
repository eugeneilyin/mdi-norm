import { createElement as h } from 'react';
import { Icon } from './Icon';
export var TwoToneViewCarousel =
/*#__PURE__*/
function TwoToneViewCarousel(props) {
  return h(Icon, props, h("path", {
    d: "M18 6h4v11h-4zM7 19h10V4H7zM9 6h6v11H9zM2 6h4v11H2z"
  }), h("path", {
    opacity: ".3",
    d: "M9 6h6v11H9z"
  }));
};