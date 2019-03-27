"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneEventSeat =
/*#__PURE__*/
function TwoToneEventSeat(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M9 5h6v7H9z"
  }), _react.default.createElement("path", {
    d: "M4 21h2v-4h12v4h2v-6H4zM17 5" + _fragments.b + "H9" + _fragments.c + "v9h10zm-2 7H9V5h6zm4-2h3v3h-3zM2 10h3v3H2z"
  }));
};

exports.TwoToneEventSeat = TwoToneEventSeat;