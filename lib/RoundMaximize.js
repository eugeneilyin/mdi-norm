"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundMaximize =
/*#__PURE__*/
function RoundMaximize(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M4 3h16" + _fragments.dk + "H4" + _fragments.el + "z"
  }));
};

exports.RoundMaximize = RoundMaximize;