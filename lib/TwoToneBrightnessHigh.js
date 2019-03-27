"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneBrightnessHigh =
/*#__PURE__*/
function TwoToneBrightnessHigh(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.er + "M12 18" + _fragments.dm
  }), _react.default.createElement("path", {
    d: _fragments.r + "M12 6" + _fragments.fw + "m0 10" + _fragments.dd
  }), _react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2.5"
  }));
};

exports.TwoToneBrightnessHigh = TwoToneBrightnessHigh;