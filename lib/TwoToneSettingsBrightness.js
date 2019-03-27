"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSettingsBrightness =
/*#__PURE__*/
function TwoToneSettingsBrightness(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3 19.01h18V4.99H3zm5-8.51V8h2.5L12 6.5 13.5 8H16v2.5l1.5 1.5-1.5 1.5V16h-2.5L12 17.5 10.5 16H8v-2.5L6.5 12 8 10.5z"
  }), _react.default.createElement("path", {
    d: _fragments.rm + "m9-6H3" + _fragments.bd + "h18" + _fragments.br + _fragments.bja
  }));
};

exports.TwoToneSettingsBrightness = TwoToneSettingsBrightness;