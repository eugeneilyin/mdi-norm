"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneViewStream =
/*#__PURE__*/
function TwoToneViewStream(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M6 13h13v3H6zm0-5h13v3H6z"
  }), _react.default.createElement("path", {
    d: "M4 6v12h17V6zm15 10H6v-3h13zm0-5H6V8h13z"
  }));
};

exports.TwoToneViewStream = TwoToneViewStream;