"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneFiberPin =
/*#__PURE__*/
function TwoToneFiberPin(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M5 14.62h1.31v-1.75h1.75c.74 0 1.31-.57 1.31-1.31v-.88c0-.74-.57-1.31-1.31-1.31H5zm1.31-3.93h1.75v.88H6.31zm5.03-1.31h1.31v5.25h-1.31zm3.28 5.24h1.1v-3.06l2.23 3.06H19V9.38h-1.09v3.06l-2.19-3.06h-1.1z"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 6h16v12H4z"
  }), _react.default.createElement("path", {
    d: "M20 4" + _fragments.cx + "m0 14H4V6h16z"
  }));
};

exports.TwoToneFiberPin = TwoToneFiberPin;