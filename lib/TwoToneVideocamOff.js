"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneVideocamOff =
/*#__PURE__*/
function TwoToneVideocamOff(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12.39 8L15 10.61V8zM5 8v8h9.73l-8-8z"
  }), _react.default.createElement("path", {
    d: "M3.41 1.86L2 3.27 4.73 6" + _fragments.qm + "c.21 0 .39-.08.55-.18L19.73 21" + _fragments.fg + "zM5 16V8h1.73l8 8zm10-8v2.61l6 6V6.5l-4 4V7" + _fragments.g + "h-5.61l2 2z"
  }));
};

exports.TwoToneVideocamOff = TwoToneVideocamOff;