"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneVideoCall =
/*#__PURE__*/
function TwoToneVideoCall(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 16h10V8H5zm2-5h2V9h2v2h2v2h-2v2H9v-2H7z"
  }), _react.default.createElement("path", {
    d: "M17 7" + _fragments.g + _fragments.qm + _fragments.f + "v-3.5l4 4v-11l-4 4zm-2 9H5V8h10zm-6-1h2v-2h2v-2h-2V9H9v2H7v2h2z"
  }));
};

exports.TwoToneVideoCall = TwoToneVideoCall;