"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundHotTub =
/*#__PURE__*/
function RoundHotTub(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    cx: "7",
    cy: "6",
    r: "2"
  }), _react.default.createElement("path", {
    d: "M21 12h-9.85" + _fragments.bhy + "H3" + _fragments.e + "v7" + _fragments.jo + "v-7" + _fragments.g + "zM7 19" + _fragments.em + "v-4" + _fragments.ho + "zm4 0" + _fragments.em + "v-4" + _fragments.ho + "zm4 0" + _fragments.em + "v-4" + _fragments.ho + "zm4 0" + _fragments.em + "v-4" + _fragments.ho + "zm-3.94-9" + _fragments.wx + "m4 0" + _fragments.wx
  }));
};

exports.RoundHotTub = RoundHotTub;