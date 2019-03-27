"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePhoneAndroid =
/*#__PURE__*/
function TwoTonePhoneAndroid(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M7 4h10v14H7z"
  }), _react.default.createElement("path", {
    d: _fragments.bls + "m-2 20h-4v-1h4zm3-3H7V4h10z"
  }));
};

exports.TwoTonePhoneAndroid = TwoTonePhoneAndroid;