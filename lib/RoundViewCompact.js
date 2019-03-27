"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundViewCompact =
/*#__PURE__*/
function RoundViewCompact(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M5 19h4v-7H3v5" + _fragments.d + "zm5 0h10" + _fragments.a + "v-5H10zM3 7v4h19V7" + _fragments.b + "H5" + _fragments.c + "z"
  }));
};

exports.RoundViewCompact = RoundViewCompact;