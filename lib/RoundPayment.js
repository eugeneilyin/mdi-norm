"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundPayment =
/*#__PURE__*/
function RoundPayment(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M20 4" + _fragments.cx + "m-1 14H5" + _fragments.k + "v-5h16v5" + _fragments.x + "zm1-10H4V7" + _fragments.bc + "h14" + _fragments.n + "z"
  }));
};

exports.RoundPayment = RoundPayment;