"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneLockOpen =
/*#__PURE__*/
function TwoToneLockOpen(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M6 20h12V10H6zm6-7" + _fragments.cn + "z"
  }), _react.default.createElement("path", {
    d: _fragments.bit
  }));
};

exports.TwoToneLockOpen = TwoToneLockOpen;