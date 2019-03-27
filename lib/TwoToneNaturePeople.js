"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneNaturePeople =
/*#__PURE__*/
function TwoToneNaturePeople(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    opacity: ".3",
    cx: "15.17",
    cy: "9.17",
    r: "5"
  }), _react.default.createElement("circle", {
    cx: "4.5",
    cy: "9.5",
    r: "1.5"
  }), _react.default.createElement("path", {
    d: "M15.17 2.17c-3.87 0-7 3.13-7 7 0 3.47 2.52 6.34 5.83 6.89V20H6v-3h1v-4" + _fragments.g + "H3" + _fragments.e + "v4h1v5h16v-2h-3v-3.88c3.47-.41 6.17-3.36 6.17-6.95 0-3.87-3.13-7-7-7zm0 12" + _fragments.bv
  }));
};

exports.TwoToneNaturePeople = TwoToneNaturePeople;