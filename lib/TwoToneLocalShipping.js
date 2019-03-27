"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneLocalShipping =
/*#__PURE__*/
function TwoToneLocalShipping(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3 15h.78c.55-.61 1.34-1 2.22-1s1.67.39 2.22 1H15V6H3z"
  }), _react.default.createElement("path", {
    d: "M17 8V4H3" + _fragments.c + "v11h2" + _fragments.qt + "h6" + _fragments.qt + "h2v-5l-3-4zM6 18" + _fragments.bj + "m9-3H8.22c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12zm3 3" + _fragments.bj + "m-1-6V9.5h2.5l1.96 2.5z"
  }));
};

exports.TwoToneLocalShipping = TwoToneLocalShipping;