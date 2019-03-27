"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundAddBox =
/*#__PURE__*/
function RoundAddBox(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M19 3" + _fragments.dx + _fragments.br + "m-3 10h-3v3" + _fragments.em + "v-3H8" + _fragments.el + "h3V8" + _fragments.ho + "v3h3" + _fragments.dk + "z"
  }));
};

exports.RoundAddBox = RoundAddBox;