"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneHotel =
/*#__PURE__*/
function TwoToneHotel(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M19 9h-6v6h8v-4" + _fragments.b + "z"
  }), _react.default.createElement("circle", {
    opacity: ".3",
    cx: "7",
    cy: "11",
    r: "1"
  }), _react.default.createElement("path", {
    d: "M4 11" + _fragments.xa + "m4 0" + _fragments.it + "m11-4h-8v8H3V5H1v15h2v-3h18v3h2v-9" + _fragments.lq + "zm2 8h-8V9h6" + _fragments.cm + "z"
  }));
};

exports.TwoToneHotel = TwoToneHotel;