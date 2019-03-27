"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundCreditCard =
/*#__PURE__*/
function RoundCreditCard(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M20 4" + _fragments.cx + "m-1 14H5" + _fragments.k + "v-5h16v5" + _fragments.x + "zm1-10H4V6h16z"
  }));
};

exports.RoundCreditCard = RoundCreditCard;