"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundNetworkCell =
/*#__PURE__*/
function RoundNetworkCell(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4.41 22H20" + _fragments.a + _fragments.ud + "z"
  }), _react.default.createElement("path", {
    d: "M17 7L3.71 20.29" + _fragments.gy + "H17z"
  }));
};

exports.RoundNetworkCell = RoundNetworkCell;