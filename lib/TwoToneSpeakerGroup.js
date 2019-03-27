"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSpeakerGroup =
/*#__PURE__*/
function TwoToneSpeakerGroup(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M10 16.99l8 .01V3h-8zM14 4" + _fragments.bme + "m0 5c1.93 0 3.5 1.57 3.5 3.5S15.93 16 14 16s-3.5-1.57-3.5-3.5S12.07 9 14 9z"
  }), _react.default.createElement("path", {
    d: _fragments.ue
  }));
};

exports.TwoToneSpeakerGroup = TwoToneSpeakerGroup;