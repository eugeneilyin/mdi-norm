"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneCardGiftcard =
/*#__PURE__*/
function TwoToneCardGiftcard(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 17h16v2H4zm13-6.17L15.38 12 12 7.4 8.62 12 7 10.83 9.08 8H4v6h16V8h-5.08z"
  }), _react.default.createElement("path", {
    d: _fragments.ek + _fragments.zm
  }));
};

exports.TwoToneCardGiftcard = TwoToneCardGiftcard;