"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneNavigation =
/*#__PURE__*/
function TwoToneNavigation(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M7.72 17.7l3.47-1.53.81-.36.81.36 3.47 1.53L12 7.27z"
  }), _react.default.createElement("path", {
    d: "M4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2 4.5 20.29zm8.31-4.12l-.81-.36-.81.36-3.47 1.53L12 7.27l4.28 10.43-3.47-1.53z"
  }));
};

exports.TwoToneNavigation = TwoToneNavigation;