"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneDirectionsBus =
/*#__PURE__*/
function TwoToneDirectionsBus(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M17.37 17l.29-.27c.13-.11.34-.36.34-.73v-4H6v4c0 .37.21.62.34.73l.29.27zM8.5 16" + _fragments.l + "S7.67 13 8.5 13" + _fragments.ga + "S9.33 16 8.5 16zm5.5-1.5" + _fragments.kj + "s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zM12 4c-3.69 0-5.11.46-5.66.99h11.31C17.11 4.46 15.69 4 12 4z"
  }), _react.default.createElement("path", {
    d: "M17 21h1" + _fragments.f + "v-1.78" + _fragments.ik + "V6" + _fragments.rr + "s-8 .5-8 4v10c0 .88.39 1.67 1 2.22V20" + _fragments.j + "h1" + _fragments.f + "v-1h8v1" + _fragments.j + "zM12 4c3.69 0 5.11.46 5.66.99H6.34C6.89 4.46 8.31 4 12 4zM6 6.99h12V10H6zM8 17H6.63l-.29-.27C6.21 16.62 6 16.37 6 16v-4h12v4c0 .37-.21.62-.34.73l-.29.27z"
  }), _react.default.createElement("circle", {
    cx: "8.5",
    cy: "14.5",
    r: "1.5"
  }), _react.default.createElement("circle", {
    cx: "15.5",
    cy: "14.5",
    r: "1.5"
  }));
};

exports.TwoToneDirectionsBus = TwoToneDirectionsBus;