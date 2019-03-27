"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var SharpSignalWifi1BarLock =
/*#__PURE__*/
function SharpSignalWifi1BarLock(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.bop
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.pn + "L12 21.5l3.5-4.36z"
  }), _react.default.createElement("path", {
    d: "M15.5 14.5c0-.23.04-.46.07-.68-.92-.43-2.14-.82-3.57-.82-3 0-5.1 1.7-5.3 1.9l5.3 6.6 3.5-4.36z"
  }));
};

exports.SharpSignalWifi1BarLock = SharpSignalWifi1BarLock;