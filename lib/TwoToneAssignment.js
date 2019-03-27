"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneAssignment =
/*#__PURE__*/
function TwoToneAssignment(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 5v14h14V5zm9 12H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"
  }), _react.default.createElement("path", {
    d: "M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7zm12-4" + _fragments.mv
  }));
};

exports.TwoToneAssignment = TwoToneAssignment;