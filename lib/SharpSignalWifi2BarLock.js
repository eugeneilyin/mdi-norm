"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var SharpSignalWifi2BarLock =
/*#__PURE__*/
function SharpSignalWifi2BarLock(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.ch + "h-1v6h7v-6" + _fragments.ci
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.pn + "L12 21.5l3.5-4.36z"
  }), _react.default.createElement("path", {
    d: _fragments.bok + "l7.2 9 3.5-4.38z"
  }));
};

exports.SharpSignalWifi2BarLock = SharpSignalWifi2BarLock;