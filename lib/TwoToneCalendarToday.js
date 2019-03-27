"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneCalendarToday =
/*#__PURE__*/
function TwoToneCalendarToday(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.bnu + "m0 2v3H4V5zM4 21V10h16v11z"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 5.01h16V8H4z"
  }));
};

exports.TwoToneCalendarToday = TwoToneCalendarToday;