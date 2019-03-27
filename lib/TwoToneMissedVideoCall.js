"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneMissedVideoCall =
/*#__PURE__*/
function TwoToneMissedVideoCall(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M15 13.5V8H5v8h10zM11 15l-3.89-3.89v2.55H6V9.22h4.44v1.11H7.89l3.11 3.1 2.99-3.01.78.79z"
  }), _react.default.createElement("path", {
    d: "M3 17" + _fragments.j + "h12" + _fragments.f + "v-3.5l4 4v-11l-4 4V7" + _fragments.g + "H4" + _fragments.e + "zm2-9h10v8H5zm6 5.43l-3.11-3.1h2.55V9.22H6v4.44h1.11v-2.55L11 15l3.77-3.79-.78-.79z"
  }));
};

exports.TwoToneMissedVideoCall = TwoToneMissedVideoCall;