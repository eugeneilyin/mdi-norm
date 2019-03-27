"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneDesktopAccessDisabled =
/*#__PURE__*/
function TwoToneDesktopAccessDisabled(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M1.41 1.69L0 3.1l1 .99V16" + _fragments.ls + "H10" + _fragments.bmf + "h.44" + _fragments.eh
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M2.99 6.09V16h9.91zM6.55 4l12 12H21V4z"
  }));
};

exports.TwoToneDesktopAccessDisabled = TwoToneDesktopAccessDisabled;