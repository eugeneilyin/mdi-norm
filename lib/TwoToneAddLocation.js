"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneAddLocation =
/*#__PURE__*/
function TwoToneAddLocation(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M17 9" + _fragments.js + "S7 6.24 7 9c0 2.85 2.92 7.21 5 9.88 2.12-2.69 5-7 5-9.88zm-8 1V8h2V6h2v2h2v2h-2v2h-2v-2z"
  }), _react.default.createElement("path", {
    d: "M19 9c0-3.86-3.14-7-7-7S5 5.14 5 9" + _fragments.bic + "m1 8v-2h2V8h-2V6h-2v2H9v2h2v2z"
  }));
};

exports.TwoToneAddLocation = TwoToneAddLocation;