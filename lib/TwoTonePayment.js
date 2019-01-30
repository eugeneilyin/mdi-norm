"use strict";

exports.__esModule = true;

var _react = require("react");

var _Icon = require("./Icon");

var TwoTonePayment =
/*#__PURE__*/
function TwoTonePayment(props) {
  return (0, _react.createElement)(_Icon.Icon, props, (0, _react.createElement)("path", {
    opacity: ".3",
    d: "M4 6h16v2H4zm0 6h16v6H4z"
  }), (0, _react.createElement)("path", {
    d: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16zm0-10H4V6h16z"
  }));
};

exports.TwoTonePayment = TwoTonePayment;