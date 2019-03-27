"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundMessage =
/*#__PURE__*/
function RoundMessage(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.jl + "m-3 12" + _fragments.bif + "m0-3" + _fragments.bif + "m0-3" + _fragments.bif
  }));
};

exports.RoundMessage = RoundMessage;