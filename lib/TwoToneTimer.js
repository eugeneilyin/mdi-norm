"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneTimer =
/*#__PURE__*/
function TwoToneTimer(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12.07 6.01" + _fragments.bkk + "m1 8h-2v-6h2z"
  }), _react.default.createElement("path", {
    d: "M9.07 1.01h6v2h-6zm2 7h2v6h-2zm8.03-.62" + _fragments.op + "C16.14 4.74 14.19 4 12.07 4" + _fragments.fc + "s4.02 9 9 9 9-4.03 9-9c0-2.11-.74-4.07-1.97-5.61zm-7.03 12.62" + _fragments.gi
  }));
};

exports.TwoToneTimer = TwoToneTimer;