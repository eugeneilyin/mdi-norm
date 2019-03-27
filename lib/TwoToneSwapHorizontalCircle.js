"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSwapHorizontalCircle =
/*#__PURE__*/
function TwoToneSwapHorizontalCircle(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.cs + "m1 11H9v2.5L5.5 14 9 10.5V13h4zm2-1.5V11h-4V9h4V6.5l3.5 3.5-3.5 3.5z"
  }), _react.default.createElement("path", {
    d: _fragments.ku + "m3-13.5V9h-4v2h4v2.5l3.5-3.5zm-6 4L5.5 14 9 17.5V15h4v-2H9z"
  }));
};

exports.TwoToneSwapHorizontalCircle = TwoToneSwapHorizontalCircle;