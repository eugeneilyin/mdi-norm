"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneBurstMode =
/*#__PURE__*/
function TwoToneBurstMode(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M11 17h10V7H11zm3-3.53l1.43 1.72 2-2.58L20 15.99h-8z"
  }), _react.default.createElement("path", {
    d: _fragments.bjk
  }));
};

exports.TwoToneBurstMode = TwoToneBurstMode;