"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneAirportShuttle =
/*#__PURE__*/
function TwoToneAirportShuttle(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3 14h.78c.55-.61 1.34-1 2.22-1s1.67.39 2.22 1h7.56c.55-.61 1.34-1 2.22-1s1.67.39 2.22 1H21v-2H3z"
  }), _react.default.createElement("path", {
    d: _fragments.ui
  }));
};

exports.TwoToneAirportShuttle = TwoToneAirportShuttle;