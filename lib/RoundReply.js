"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundReply =
/*#__PURE__*/
function RoundReply(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M10 9V7.41" + _fragments.hp + "L3.7 11.29" + _fragments.dc + "l4.59 4.59c.63.63 1.71.19 1.71-.7V14.9" + _fragments.bmp
  }));
};

exports.RoundReply = RoundReply;