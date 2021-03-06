"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundPortrait =
/*#__PURE__*/
function RoundPortrait(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.pi + _fragments.dp + "m-1 16H6" + _fragments.baw
  }));
};

exports.RoundPortrait = RoundPortrait;