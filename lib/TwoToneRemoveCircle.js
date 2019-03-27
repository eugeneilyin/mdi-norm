"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneRemoveCircle =
/*#__PURE__*/
function TwoToneRemoveCircle(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.cs + "m5 9H7v-2h10z"
  }), _react.default.createElement("path", {
    d: "M7 11h10v2H7zm5-9" + _fragments.i + _fragments.y
  }));
};

exports.TwoToneRemoveCircle = TwoToneRemoveCircle;