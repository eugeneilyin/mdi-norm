"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneForward =
/*#__PURE__*/
function TwoToneForward(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M14 14v1.17L17.17 12 14 8.83V10H6v4z"
  }), _react.default.createElement("path", {
    d: "M20 12l-8-8v4H4v8h8v4zM6 14v-4h8V8.83L17.17 12 14 15.17V14z"
  }));
};

exports.TwoToneForward = TwoToneForward;