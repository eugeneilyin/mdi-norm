"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundSignalWifi2BarLock =
/*#__PURE__*/
function RoundSignalWifi2BarLock(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.pn + _fragments.si + "l1.94-2.42z"
  }), _react.default.createElement("path", {
    d: _fragments.bok + "l5.64 7.05c.8 1 2.32 1 3.12 0l1.94-2.42z" + _fragments.cj
  }));
};

exports.RoundSignalWifi2BarLock = RoundSignalWifi2BarLock;