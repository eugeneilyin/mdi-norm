"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineWeb =
/*#__PURE__*/
function OutlineWeb(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18c0 1.1 .9 2 2 2h16" + _fragments.a + "V6C22 4.9 21.1 4 20 4zM4 9h10.5v3.5H4zM4 14.5h10.5V18H4zM20 18h-3.5V9H20z"
  }));
};

exports.OutlineWeb = OutlineWeb;