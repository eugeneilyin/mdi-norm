"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundSwapVerticalCircle =
/*#__PURE__*/
function RoundSwapVerticalCircle(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.kt + "M6.5 9l3.15-3.15c.2-.2.51-.2.71 0L13.5 9H11v4H9V9zm7.85 9.15c-.2.2-.51.2-.71 0L10.5 15H13v-4h2v4h2.5z"
  }));
};

exports.RoundSwapVerticalCircle = RoundSwapVerticalCircle;