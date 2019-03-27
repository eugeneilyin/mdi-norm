"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSettingsInputHdmi =
/*#__PURE__*/
function TwoToneSettingsInputHdmi(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M8 9H7v3.53l2.79 5.58.21.42V20h4v-1.47L17 12.53V9z"
  }), _react.default.createElement("path", {
    d: _fragments.bgp
  }));
};

exports.TwoToneSettingsInputHdmi = TwoToneSettingsInputHdmi;