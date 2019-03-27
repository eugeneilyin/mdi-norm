"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneDepartureBoard =
/*#__PURE__*/
function TwoToneDepartureBoard(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M9.29 6H9c-3.69 0-5.11.46-5.66.99h5.74zM3 14v4c0 .37.21.62.34.73l.29.27h10.74l.29-.27c.13-.11.34-.36.34-.73v-3.08c-.94-.13-1.81-.45-2.59-.92zm2.5 4" + _fragments.l + "S4.67 15 5.5 15" + _fragments.ga + "S6.33 18 5.5 18zm8.5-1.5" + _fragments.ot + "s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z"
  }), _react.default.createElement("circle", {
    cx: "5.5",
    cy: "16.5",
    r: "1.5"
  }), _react.default.createElement("circle", {
    cx: "12.5",
    cy: "16.5",
    r: "1.5"
  }), _react.default.createElement("path", {
    d: _fragments.im
  }));
};

exports.TwoToneDepartureBoard = TwoToneDepartureBoard;