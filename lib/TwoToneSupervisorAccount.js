"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSupervisorAccount =
/*#__PURE__*/
function TwoToneSupervisorAccount(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    opacity: ".3",
    cx: "9",
    cy: "8.5",
    r: "1.5"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M4.77 17h4.28c.01-.06.12-.58.29-.99-.11 0-.23-.01-.34-.01-1.53 0-3.25.5-4.23 1z"
  }), _react.default.createElement("path", {
    d: _fragments.ir
  }));
};

exports.TwoToneSupervisorAccount = TwoToneSupervisorAccount;