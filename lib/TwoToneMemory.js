"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneMemory =
/*#__PURE__*/
function TwoToneMemory(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M7 17h10V7H7zm2-8h6v6H9z"
  }), _react.default.createElement("path", {
    d: "M21 11" + _fragments.bgc + "m-2-8H9v6h6zm-2 4" + _fragments.me
  }));
};

exports.TwoToneMemory = TwoToneMemory;