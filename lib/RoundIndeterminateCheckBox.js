"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundIndeterminateCheckBox =
/*#__PURE__*/
function RoundIndeterminateCheckBox(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.dp + "m-3 10H8" + _fragments.el + "h8" + _fragments.dk + "z"
  }));
};

exports.RoundIndeterminateCheckBox = RoundIndeterminateCheckBox;