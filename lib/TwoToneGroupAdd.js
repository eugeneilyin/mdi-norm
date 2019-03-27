"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneGroupAdd =
/*#__PURE__*/
function TwoToneGroupAdd(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M5 15v-3h3v-2H5V7H3v3H0v2h3v3z"
  }), _react.default.createElement("circle", {
    opacity: ".3",
    cx: "12",
    cy: "8.5",
    r: "1.5"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M7.34 17h9.32c-.84-.58-2.87-1.25-4.66-1.25s-3.82.67-4.66 1.25z"
  }), _react.default.createElement("path", {
    d: _fragments.bgf + "m0 6.75" + _fragments.jw + "M7.34 17" + _fragments.jx + "M17 12" + _fragments.wg
  }));
};

exports.TwoToneGroupAdd = TwoToneGroupAdd;