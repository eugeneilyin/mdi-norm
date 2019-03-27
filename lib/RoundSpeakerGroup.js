"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundSpeakerGroup =
/*#__PURE__*/
function RoundSpeakerGroup(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.mf + "M14 3" + _fragments.bme + "m0 13.5" + _fragments.dd
  }), _react.default.createElement("circle", {
    cx: "14",
    cy: "12.5",
    r: "2.5"
  }), _react.default.createElement("path", {
    d: "M5 5" + _fragments.e + "v15" + _fragments.cr + "h9" + _fragments.o + "H7" + _fragments.k + "V6" + _fragments.g + "z"
  }));
};

exports.RoundSpeakerGroup = RoundSpeakerGroup;