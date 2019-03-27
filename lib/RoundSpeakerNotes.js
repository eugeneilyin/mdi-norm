"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundSpeakerNotes =
/*#__PURE__*/
function RoundSpeakerNotes(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.jl + "M8 14H6v-2h2zm0-3H6V9h2zm0-3H6V6h2zm6 6h-3" + _fragments.el + "h3" + _fragments.dk + "zm3-3h-6" + _fragments.el + "h6" + _fragments.dk + "zm0-3h-6" + _fragments.el + "h6" + _fragments.dk + "z"
  }));
};

exports.RoundSpeakerNotes = RoundSpeakerNotes;