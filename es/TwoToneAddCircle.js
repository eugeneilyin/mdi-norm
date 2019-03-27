import React from 'react';
import { Icon } from './Icon';
import { i, y, cs, bpe } from './fragments';
export var TwoToneAddCircle =
/*#__PURE__*/
function TwoToneAddCircle(props) {
  return React.createElement(Icon, props, React.createElement("path", {
    opacity: ".3",
    d: cs + "m5 9h-4v4h-2v-4H7v-2h4V7h2v4h4z"
  }), React.createElement("path", {
    d: bpe + "m-1-5" + i + y
  }));
};