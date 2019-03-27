"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var SharpTrain =
/*#__PURE__*/
function SharpTrain(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.tr + "M7.5 17" + _fragments.rs + "m3.5-7H6V6h5zm5.5 7" + _fragments.m + "m1.5-7h-5V6h5z"
  }));
};

exports.SharpTrain = SharpTrain;