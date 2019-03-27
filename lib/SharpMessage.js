"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var SharpMessage =
/*#__PURE__*/
function SharpMessage(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M22 2H2.01L2 22l4-4h16zm-4 12" + _fragments.bgu
  }));
};

exports.SharpMessage = SharpMessage;