"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneVolumeMute =
/*#__PURE__*/
function TwoToneVolumeMute(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M9 13h2.83L14 15.17V8.83L11.83 11H9z"
  }), _react.default.createElement("path", {
    d: "M7 9v6h4l5 5V4l-5 5zm7-.17v6.34L11.83 13H9v-2h2.83z"
  }));
};

exports.TwoToneVolumeMute = TwoToneVolumeMute;