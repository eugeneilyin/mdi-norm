"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledFlight =
/*#__PURE__*/
function FilledFlight(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M21 16v-2l-8-5V3.5" + _fragments.df + "S10 2.67 10 3.5V9l-8 5" + _fragments.bpp + "v-5.5z"
  }));
};

exports.FilledFlight = FilledFlight;