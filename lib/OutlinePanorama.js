"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlinePanorama =
/*#__PURE__*/
function OutlinePanorama(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M21 4H3" + _fragments.cy + "h18" + _fragments.sq + "zm0 14H3V6h18zm-6.5-7L11 15.51 8.5 12.5 5 17h14z"
  }));
};

exports.OutlinePanorama = OutlinePanorama;