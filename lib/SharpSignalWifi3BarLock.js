"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var SharpSignalWifi3BarLock =
/*#__PURE__*/
function SharpSignalWifi3BarLock(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.pn + "L12 21.5l3.5-4.36z"
  }), _react.default.createElement("path", {
    d: _fragments.bop + "m-6.5-1.5c0-2.19 1.35-3.99 3.27-4.68C17.29 8.98 14.94 8 12 8c-4.81 0-8.04 2.62-8.47 2.95L12 21.5l3.5-4.36z"
  }));
};

exports.SharpSignalWifi3BarLock = SharpSignalWifi3BarLock;