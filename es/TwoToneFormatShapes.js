import React from 'react';
import { Icon } from './Icon';
import { fs, me } from './fragments';
export var TwoToneFormatShapes =
/*#__PURE__*/
function TwoToneFormatShapes(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: "M3 3h2v2H3zm16 16" + fs + "m0-16" + fs + "M3 19h2v2H3z"
  }), React.createElement("path", {
    d: "M11.29 7l-3.4 9h1.62l.73-2h3.49l.74 2h1.63l-3.41-9zm-.6 5.74L12 8.91l1.3 3.83zM17 3H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2V1h-6zM3 3h2v2H3zm2 18H3v-2h2zm16 0" + me + "M19 3" + fs + "m0 14h-2v2H7v-2H5V7h2V5h10v2h2z"
  }));
};