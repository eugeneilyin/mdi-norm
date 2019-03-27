"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneViewColumn =
/*#__PURE__*/
function TwoToneViewColumn(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M6 7h3v9H6zm5 0h3v9h-3zm5 0h3v9h-3z"
  }), _react.default.createElement("path", {
    d: "M4 5v13h17V5zm5 11H6V7h3zm5 0h-3V7h3zm5 0h-3V7h3z"
  }));
};

exports.TwoToneViewColumn = TwoToneViewColumn;