"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundCategory =
/*#__PURE__*/
function RoundCategory(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M11.15 3.4L7.43 9.48c-.41.66.07 1.52.85 1.52h7.43c.78 0 1.26-.86.85-1.52L12.85 3.4c-.39-.64-1.31-.64-1.7 0z"
  }), _react.default.createElement("circle", {
    cx: "17.5",
    cy: "17.5",
    r: "4.5"
  }), _react.default.createElement("path", {
    d: "M4 21.5h6" + _fragments.f + "v-6" + _fragments.g + "H4" + _fragments.e + "v6" + _fragments.j + "z"
  }));
};

exports.RoundCategory = RoundCategory;