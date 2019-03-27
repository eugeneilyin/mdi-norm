"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundSpaceBar =
/*#__PURE__*/
function RoundSpaceBar(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M18 10v3H6v-3" + _fragments.bu + "v4" + _fragments.j + "h14" + _fragments.f + "v-4" + _fragments.bu + "z"
  }));
};

exports.RoundSpaceBar = RoundSpaceBar;