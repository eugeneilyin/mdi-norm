"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSwapVerticalCircle =
/*#__PURE__*/
function TwoToneSwapVerticalCircle(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.cs + "M6.5 9L10 5.5 13.5 9H11v4H9V9zm7.5 9.5L10.5 15H13v-4h2v4h2.5z"
  }), _react.default.createElement("path", {
    d: _fragments.ku + "m-1-7V9h2.5L10 5.5 6.5 9H9v4zm4-2h-2v4h-2.5l3.5 3.5 3.5-3.5H15z"
  }));
};

exports.TwoToneSwapVerticalCircle = TwoToneSwapVerticalCircle;