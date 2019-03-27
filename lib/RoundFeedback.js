"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundFeedback =
/*#__PURE__*/
function RoundFeedback(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M20 2H4.01" + _fragments.c + "v18L6 18h14" + _fragments.eh + "m-7 12" + _fragments.me + "m0-5" + _fragments.em + "V7" + _fragments.ho + "z"
  }));
};

exports.RoundFeedback = RoundFeedback;