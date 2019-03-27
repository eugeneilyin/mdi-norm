"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneBrokenImage =
/*#__PURE__*/
function TwoToneBrokenImage(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M13.99 15.41l-4-4-4 4-.99-.99V19h14v-6.57l-1.01-1.01zM5 11.59l.99 1 4-4 4 4 4-4.01L19 9.59V5H5z"
  }), _react.default.createElement("path", {
    d: _fragments.blo
  }));
};

exports.TwoToneBrokenImage = TwoToneBrokenImage;