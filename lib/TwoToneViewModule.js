"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneViewModule =
/*#__PURE__*/
function TwoToneViewModule(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M11 12.5h3V16h-3zM11 7h3v3.5h-3zm-5 5.5h3V16H6zM6 7h3v3.5H6zm10 0h3v3.5h-3zm0 5.5h3V16h-3z"
  }), _react.default.createElement("path", {
    d: "M4 5v13h17V5zm5 11H6v-3.5h3zm0-5.5H6V7h3zm5 5.5h-3v-3.5h3zm0-5.5h-3V7h3zm5 5.5h-3v-3.5h3zm0-5.5h-3V7h3z"
  }));
};

exports.TwoToneViewModule = TwoToneViewModule;