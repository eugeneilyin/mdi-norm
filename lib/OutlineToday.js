"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineToday =
/*#__PURE__*/
function OutlineToday(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M19 3h-1" + _fragments.mm + _fragments.dx + _fragments.br + "m0 16H5V9h14zm0-12H5V5h14zM7 11h5v5H7z"
  }));
};

exports.OutlineToday = OutlineToday;