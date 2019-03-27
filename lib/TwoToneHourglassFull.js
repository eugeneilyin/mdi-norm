"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneHourglassFull =
/*#__PURE__*/
function TwoToneHourglassFull(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M8 7.5l4 4 4-4V4H8zm0 9V20h8v-3.5l-4-4z"
  }), _react.default.createElement("path", {
    d: "M18 2H6" + _fragments.beb + "zm-2 14.5V20H8v-3.5l4-4 4 4zm0-9l-4 4-4-4V4h8z"
  }));
};

exports.TwoToneHourglassFull = TwoToneHourglassFull;