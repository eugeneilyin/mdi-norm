"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundPhoneAndroid =
/*#__PURE__*/
function RoundPhoneAndroid(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.bls + "m-2.5 20h-3" + _fragments.rp + "s.22-.5.5-.5h3" + _fragments.yg + "s-.22.5-.5.5zm3.5-3H7V4h10z"
  }));
};

exports.RoundPhoneAndroid = RoundPhoneAndroid;