"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneNoEncryption =
/*#__PURE__*/
function TwoToneNoEncryption(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M6 20h10.78l-10-10H6zm6.44-10L18 15.56V10z"
  }), _react.default.createElement("path", {
    d: _fragments.vo
  }));
};

exports.TwoToneNoEncryption = TwoToneNoEncryption;