"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineFilterFrames =
/*#__PURE__*/
function OutlineFilterFrames(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.bar + "M6 18h12V8H6zm2-8h8v6H8z"
  }));
};

exports.OutlineFilterFrames = OutlineFilterFrames;