"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePayment =
/*#__PURE__*/
function TwoTonePayment(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 6h16v2H4zm0 6h16v6H4z"
  }), _react.default.createElement("path", {
    d: "M20 4" + _fragments.cx + "m0 14H4v-6h16zm0-10H4V6h16z"
  }));
};

exports.TwoTonePayment = TwoTonePayment;