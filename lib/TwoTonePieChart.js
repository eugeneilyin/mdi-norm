"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePieChart =
/*#__PURE__*/
function TwoTonePieChart(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 12c0 4.07 3.06 7.44 7 7.93V4.07C7.06 4.56 4 7.93 4 12zm9 7.93c3.61-.45 6.48-3.32 6.93-6.93H13zV11h6.93c-.45-3.61-3.32-6.48-6.93-6.93z"
  }), _react.default.createElement("path", {
    d: _fragments.kt + "m-1 17.93c-3.94-.49-7-3.86-7-7.93s3.06-7.44 7-7.93zm2 0V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93zM13 11V4.07c3.61.45 6.48 3.32 6.93 6.93z"
  }));
};

exports.TwoTonePieChart = TwoTonePieChart;