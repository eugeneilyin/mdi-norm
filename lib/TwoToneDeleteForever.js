"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneDeleteForever =
/*#__PURE__*/
function TwoToneDeleteForever(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M16 9H8v10h8zm-.47 7.12l-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14z"
  }), _react.default.createElement("path", {
    d: _fragments.wf
  }));
};

exports.TwoToneDeleteForever = TwoToneDeleteForever;