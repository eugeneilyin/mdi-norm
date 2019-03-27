"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneAccountBalanceWallet =
/*#__PURE__*/
function TwoToneAccountBalanceWallet(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M13 17" + _fragments.bo + "V9" + _fragments.ez + "h6V5H5v14h14v-2z"
  }), _react.default.createElement("path", {
    d: "M21 7.28V5" + _fragments.b + _fragments.dx + _fragments.a + "v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.38-1-1.72zM20 9v6h-7V9zM5 19V5h14v2h-6" + _fragments.c + "v6" + _fragments.d + "h6v2z"
  }), _react.default.createElement("circle", {
    cx: "16",
    cy: "12",
    r: "1.5"
  }));
};

exports.TwoToneAccountBalanceWallet = TwoToneAccountBalanceWallet;