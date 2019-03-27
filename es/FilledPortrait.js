import React from 'react';
import { Icon } from './Icon';
import { pi, qi } from './fragments';
export var FilledPortrait =
/*#__PURE__*/
function FilledPortrait(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    d: pi + qi
  }));
};