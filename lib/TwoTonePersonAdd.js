"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePersonAdd =
/*#__PURE__*/
function TwoTonePersonAdd(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M15 16" + _fragments.bfa
  }), _react.default.createElement("circle", {
    opacity: ".3",
    cx: "15",
    cy: "8",
    r: "2"
  }), _react.default.createElement("path", {
    d: "M15 12" + _fragments.co + "m0 8" + _fragments.wm + "m-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"
  }));
};

exports.TwoTonePersonAdd = TwoTonePersonAdd;