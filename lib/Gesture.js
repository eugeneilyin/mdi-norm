"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledGesture = require("./FilledGesture");

var _OutlineGesture = require("./OutlineGesture");

var _RoundGesture = require("./RoundGesture");

var _SharpGesture = require("./SharpGesture");

var _TwoToneGesture = require("./TwoToneGesture");

var Gesture =
/*#__PURE__*/
function Gesture(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledGesture.FilledGesture, _OutlineGesture.OutlineGesture, _RoundGesture.RoundGesture, _SharpGesture.SharpGesture, _TwoToneGesture.TwoToneGesture);
};

exports.Gesture = Gesture;