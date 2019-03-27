"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneCalendarViewDay =
/*#__PURE__*/
function TwoToneCalendarViewDay(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M3 17h18v2H3zm16-5v1H5v-1h14m2-2H3v5h18zM3 6h18v2H3z"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 12h14v1H5z"
  }));
};

exports.TwoToneCalendarViewDay = TwoToneCalendarViewDay;