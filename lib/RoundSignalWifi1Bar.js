"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundSignalWifi1Bar =
/*#__PURE__*/
function RoundSignalWifi1Bar(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M6.67 14.86l3.77 4.7c.8 1 2.32 1 3.12 0l3.78-4.7C17.06 14.65 15.03 13 12 13s-5.06 1.65-5.33 1.86z"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M23.64 7" + _fragments.fi + _fragments.si + "z"
  }));
};

exports.RoundSignalWifi1Bar = RoundSignalWifi1Bar;