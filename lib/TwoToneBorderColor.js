"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneBorderColor =
/*#__PURE__*/
function TwoToneBorderColor(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".36",
    d: "M14 6.08l-8 8V15h.92l8-8z"
  }), _react.default.createElement("path", {
    d: _fragments.bhg
  }), _react.default.createElement("path", {
    opacity: ".36",
    d: "M0 20h24v4H0z"
  }));
};

exports.TwoToneBorderColor = TwoToneBorderColor;