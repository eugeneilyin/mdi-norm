"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineCalendarToday =
/*#__PURE__*/
function OutlineCalendarToday(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.bnu + "m0 18H4V10h16zm0-13H4V5h16z"
  }));
};

exports.OutlineCalendarToday = OutlineCalendarToday;