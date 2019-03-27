"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledSignalCellularConnectedNoInternet2Bar =
/*#__PURE__*/
function FilledSignalCellularConnectedNoInternet2Bar(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M22 8V2L2 22h16V8z"
  }), _react.default.createElement("path", {
    d: "M14 22V10L2 22zm6-12v8h2v-8zm0 12" + _fragments.jr
  }));
};

exports.FilledSignalCellularConnectedNoInternet2Bar = FilledSignalCellularConnectedNoInternet2Bar;