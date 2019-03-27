"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneRestoreFromTrash =
/*#__PURE__*/
function TwoToneRestoreFromTrash(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M16 14h-2v4h-4v-4H8v5h8zV9H8v5l4-4z"
  }), _react.default.createElement("path", {
    d: _fragments.we + "V7H6zm2-5V9h8v10H8zm7.5-10" + _fragments.wd + "V4zM10 18h4v-4h2l-4-4-4 4h2z"
  }));
};

exports.TwoToneRestoreFromTrash = TwoToneRestoreFromTrash;