"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundEvent =
/*#__PURE__*/
function RoundEvent(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M16 13h-3" + _fragments.e + "v3" + _fragments.j + "h3" + _fragments.f + "v-3" + _fragments.g + "zm0-10v1H8V3" + _fragments.bu + "v1" + _fragments.sr + "h-1V3" + _fragments.bu + "zm2 17H6" + _fragments.k + "V9h14v10" + _fragments.x + "z"
  }));
};

exports.RoundEvent = RoundEvent;