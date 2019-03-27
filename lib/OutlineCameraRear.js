"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineCameraRear =
/*#__PURE__*/
function OutlineCameraRear(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M5 20v2h5v2l3-3-3-3v2zm9 0h5v2h-5zm3-20" + _fragments.ti + "m0 16H7V2h10zm-5-9c1.1 0 2-.9 1.99-2 0-1.1-.9-2-2-2S10 3.9 10 5s.89 2 2 2z"
  }));
};

exports.OutlineCameraRear = OutlineCameraRear;