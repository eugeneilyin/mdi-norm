"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneFilter =
/*#__PURE__*/
function TwoToneFilter(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M7 17h14V3H7zm4.25-5.53l1.96 2.36 2.75-3.54L19.5 15h-11z"
  }), _react.default.createElement("path", {
    d: "M1 21" + _fragments.d + "h16v-2H3V5H1zM21 1" + _fragments.in_ + "m-5.04-6.71l-2.75 3.54-1.96-2.36L8.5 15h11z"
  }));
};

exports.TwoToneFilter = TwoToneFilter;