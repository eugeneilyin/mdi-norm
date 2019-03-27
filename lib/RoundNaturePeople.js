"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundNaturePeople =
/*#__PURE__*/
function RoundNaturePeople(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    cx: "4.5",
    cy: "9.5",
    r: "1.5"
  }), _react.default.createElement("path", {
    d: _fragments.bks + "h.5" + _fragments.es + "V13" + _fragments.g + "H3" + _fragments.e + "v3.5" + _fragments.pu + "H3v4" + _fragments.j + "h14" + _fragments.o + "h-2v-3.88c3.47-.41 6.17-3.36 6.17-6.95z"
  }));
};

exports.RoundNaturePeople = RoundNaturePeople;