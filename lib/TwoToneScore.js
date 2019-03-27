"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneScore =
/*#__PURE__*/
function TwoToneScore(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 19h8l-4-4zm0-2.5l4-4 4 4 6-6V5H5zM12 6h1.5v3l2-3h1.7l-2 3 2 3h-1.7l-2-3v3H12zM7 8.25h2.5V7.5H7V6h4v3.75H8.5v.75H11V12H7zM19 19v-6l-6 6z"
  }), _react.default.createElement("path", {
    d: _fragments.bbb
  }));
};

exports.TwoToneScore = TwoToneScore;