"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneGroup =
/*#__PURE__*/
function TwoToneGroup(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    opacity: ".3",
    cx: "9",
    cy: "8.5",
    r: "1.5"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M4.34 17h9.32c-.84-.58-2.87-1.25-4.66-1.25s-3.82.67-4.66 1.25z"
  }), _react.default.createElement("path", {
    d: _fragments.jz
  }));
};

exports.TwoToneGroup = TwoToneGroup;