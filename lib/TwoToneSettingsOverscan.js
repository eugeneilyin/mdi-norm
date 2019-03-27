"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSettingsOverscan =
/*#__PURE__*/
function TwoToneSettingsOverscan(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3 19.01h18V4.99H3zM18 10l2.5 2.01L18 14zm-5.99-4.5L14 8h-4zM14 16l-1.99 2.5L10 16zm-8-6v4l-2.5-1.99z"
  }), _react.default.createElement("path", {
    d: "M14 16h-4l2.01 2.5zm4-6v4l2.5-1.99zm3-7H3" + _fragments.bd + "h18" + _fragments.br + _fragments.bja + "M6 10l-2.5 2.01L6 14zm6.01-4.5L10 8h4z"
  }));
};

exports.TwoToneSettingsOverscan = TwoToneSettingsOverscan;