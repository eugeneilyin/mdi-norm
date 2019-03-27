"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneFreeBreakfast =
/*#__PURE__*/
function TwoToneFreeBreakfast(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M6 13" + _fragments.d + "h6" + _fragments.a + "V5H6z"
  }), _react.default.createElement("path", {
    d: _fragments.blt
  }));
};

exports.TwoToneFreeBreakfast = TwoToneFreeBreakfast;