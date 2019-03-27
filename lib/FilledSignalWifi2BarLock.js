"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledSignalWifi2BarLock =
/*#__PURE__*/
function FilledSignalWifi2BarLock(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.cj
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M15.5 14.5" + _fragments.yy + "l3.5-4.3z"
  }), _react.default.createElement("path", {
    d: "M4.8 12.5l7.2 9 3.5-4.4v-2.6c0-1.3.5-2.5 1.4-3.4C15.6 10.5 14 10 12 10c-4.1 0-6.8 2.2-7.2 2.5z"
  }));
};

exports.FilledSignalWifi2BarLock = FilledSignalWifi2BarLock;