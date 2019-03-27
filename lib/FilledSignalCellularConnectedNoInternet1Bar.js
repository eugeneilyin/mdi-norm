"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledSignalCellularConnectedNoInternet1Bar =
/*#__PURE__*/
function FilledSignalCellularConnectedNoInternet1Bar(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M22 8V2L2 22h16V8z"
  }), _react.default.createElement("path", {
    d: "M20 10v8h2v-8zm-8 12V12L2 22zm8 0" + _fragments.jr
  }));
};

exports.FilledSignalCellularConnectedNoInternet1Bar = FilledSignalCellularConnectedNoInternet1Bar;