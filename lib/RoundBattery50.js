"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundBattery50 =
/*#__PURE__*/
function RoundBattery50(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.bol + _fragments.gg + "V13h10z"
  }), _react.default.createElement("path", {
    d: "M7 13v7.67" + _fragments.by + "V13z"
  }));
};

exports.RoundBattery50 = RoundBattery50;