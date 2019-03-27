"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundLinkedCamera =
/*#__PURE__*/
function RoundLinkedCamera(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    cx: "12",
    cy: "14",
    r: "3"
  }), _react.default.createElement("path", {
    d: "M16.6 3.37c2.1.27 3.77 1.93 4.03 4.03.04.34.32.6.66.6.39 0 .71-.34.66-.73-.33-2.72-2.5-4.89-5.22-5.22-.39-.05-.73.27-.73.66 0 .34.26.62.6.66zm2.63 3.82C18.93 6 18 5.07 16.81 4.77c-.41-.1-.81.22-.81.65 0 .29.19.57.48.64.72.18 1.29.74 1.46 1.46.07.29.34.48.64.48.43 0 .75-.4.65-.81zM17 9" + _fragments.b + "V5" + _fragments.g + "H9.88c-.56 0-1.1.24-1.48.65L7.17 6" + _fragments.gx + "v-9" + _fragments.b + "zm-5 10" + _fragments.bv
  }));
};

exports.RoundLinkedCamera = RoundLinkedCamera;