"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlinePinDrop =
/*#__PURE__*/
function OutlinePinDrop(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M5 20h14v2H5zM18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11zM8 8" + _fragments.pl + "c0 2.13-2.08 5.46-4 7.91-1.92-2.44-4-5.78-4-7.91zm4-2" + _fragments.c + "s.9 2 2 2" + _fragments.dy + "s-.9-2-2-2z"
  }));
};

exports.OutlinePinDrop = OutlinePinDrop;