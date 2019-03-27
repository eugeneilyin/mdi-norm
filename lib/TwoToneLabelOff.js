"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneLabelOff =
/*#__PURE__*/
function TwoToneLabelOff(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 7.03V17h9.97zM16 7h-5.37l7.29 7.29L19.55 12z"
  }), _react.default.createElement("path", {
    d: _fragments.tn + "m3 3L14.97 17H5z"
  }));
};

exports.TwoToneLabelOff = TwoToneLabelOff;