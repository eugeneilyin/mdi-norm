"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineRadio =
/*#__PURE__*/
function OutlineRadio(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M20 6H8.3l8.26-3.34L15.88 1 3.24 6.15C2.51 6.43 2 7.17 2 8v12" + _fragments.cr + "h16" + _fragments.dy + "V8" + _fragments.cw + "zm0 2v3h-2V9h-2v2H4V8zM4 20v-7h16v7z"
  }), _react.default.createElement("circle", {
    cx: "8",
    cy: "16.48",
    r: "2.5"
  }));
};

exports.OutlineRadio = OutlineRadio;