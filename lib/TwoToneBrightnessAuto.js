"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneBrightnessAuto =
/*#__PURE__*/
function TwoToneBrightnessAuto(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.er + "M14.3 16l-.7-2h-3.2l-.7 2H7.8L11 7h2l3.2 9zm-3.45-3.35h2.3L12 9z"
  }), _react.default.createElement("path", {
    d: "M11 7" + _fragments.blr + "L13 7zm-.15 5.65L12 9l1.15 3.65z" + _fragments.r
  }));
};

exports.TwoToneBrightnessAuto = TwoToneBrightnessAuto;