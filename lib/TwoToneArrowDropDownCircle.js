"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneArrowDropDownCircle =
/*#__PURE__*/
function TwoToneArrowDropDownCircle(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.cs + "m0 11l-4-4h8z"
  }), _react.default.createElement("path", {
    d: _fragments.ku + "m0-5l4-4H8z"
  }));
};

exports.TwoToneArrowDropDownCircle = TwoToneArrowDropDownCircle;