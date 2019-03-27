"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineBrightnessHigh =
/*#__PURE__*/
function OutlineBrightnessHigh(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.r + "M12 6" + _fragments.fw + "m0 10" + _fragments.dd
  }), _react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2.5"
  }));
};

exports.OutlineBrightnessHigh = OutlineBrightnessHigh;