"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineBorderColor =
/*#__PURE__*/
function OutlineBorderColor(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.bhg
  }), _react.default.createElement("path", {
    opacity: ".36",
    d: "M0 20h24v4H0z"
  }));
};

exports.OutlineBorderColor = OutlineBorderColor;