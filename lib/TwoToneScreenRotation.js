"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneScreenRotation =
/*#__PURE__*/
function TwoToneScreenRotation(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M14.828 21.192L2.808 9.172l6.357-6.357 12.02 12.02z"
  }), _react.default.createElement("path", {
    d: _fragments.ks
  }));
};

exports.TwoToneScreenRotation = TwoToneScreenRotation;