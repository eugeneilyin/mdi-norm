"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneAirlineSeatIndividualSuite =
/*#__PURE__*/
function TwoToneAirlineSeatIndividualSuite(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    opacity: ".3",
    cx: "7",
    cy: "11",
    r: "1"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M19 9h-6v6h8v-4" + _fragments.b + "z"
  }), _react.default.createElement("path", {
    d: _fragments.bms + "V7H1v10h22v-6" + _fragments.lq + "zm2 8h-8V9h6" + _fragments.cm + "z"
  }));
};

exports.TwoToneAirlineSeatIndividualSuite = TwoToneAirlineSeatIndividualSuite;