"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneNoSim =
/*#__PURE__*/
function TwoToneNoSim(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M7 19h9.23L7 9.77z"
  }), _react.default.createElement("path", {
    d: "M3.79 3.74L2.38 5.15" + _fragments.bne
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M10.84 5L9.36 6.47 17 14.11V5z"
  }), _react.default.createElement("path", {
    d: "M10.84 5H17v9.11l2 2V5" + _fragments.b + "h-6.99L7.95 5.06l1.41 1.41z"
  }));
};

exports.TwoToneNoSim = TwoToneNoSim;