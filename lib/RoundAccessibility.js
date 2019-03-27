"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundAccessibility =
/*#__PURE__*/
function RoundAccessibility(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M12 2" + _fragments.cn + "zm8 7h-5v12" + _fragments.em + "v-5h-2v5" + _fragments.em + "V9H4" + _fragments.el + "h16" + _fragments.dk + "z"
  }));
};

exports.RoundAccessibility = RoundAccessibility;