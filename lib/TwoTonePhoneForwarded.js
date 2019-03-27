"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePhoneForwarded =
/*#__PURE__*/
function TwoTonePhoneForwarded(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M15.2 18.21" + _fragments.oi + _fragments.pt
  }), _react.default.createElement("path", {
    d: "M20 15.5" + _fragments.w + "M18 11l5-5-5-5v3h-4v4h4z"
  }));
};

exports.TwoTonePhoneForwarded = TwoTonePhoneForwarded;