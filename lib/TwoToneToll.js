"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneToll =
/*#__PURE__*/
function TwoToneToll(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M15 6" + _fragments.fw
  }), _react.default.createElement("path", {
    d: "M15 4" + _fragments.ec + "m0 14" + _fragments.dm + "M3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12c0 3.73 2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"
  }));
};

exports.TwoToneToll = TwoToneToll;