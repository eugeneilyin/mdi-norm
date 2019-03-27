"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundNote =
/*#__PURE__*/
function RoundNote(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M21.41 9.41l-4.83-4.83c-.37-.37-.88-.58-1.41-.58H4" + _fragments.c + "v12.01c0 1.1.89 1.99 1.99 1.99H20" + _fragments.a + "v-7.17c0-.53-.21-1.04-.59-1.42zM15 5.5l5.5 5.5H16" + _fragments.k + "z"
  }));
};

exports.RoundNote = RoundNote;