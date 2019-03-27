"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundCalendarViewDay =
/*#__PURE__*/
function RoundCalendarViewDay(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M4 17h16" + _fragments.dk + "H4" + _fragments.el + "zm0-7h16" + _fragments.n + "v3" + _fragments.x + "H4" + _fragments.k + "v-3" + _fragments.bc + "zm0-4h16" + _fragments.dk + "H4" + _fragments.el + "z"
  }));
};

exports.RoundCalendarViewDay = RoundCalendarViewDay;