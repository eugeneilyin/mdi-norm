"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledShutterSpeed = require("./FilledShutterSpeed");

var _OutlineShutterSpeed = require("./OutlineShutterSpeed");

var _RoundShutterSpeed = require("./RoundShutterSpeed");

var _SharpShutterSpeed = require("./SharpShutterSpeed");

var _TwoToneShutterSpeed = require("./TwoToneShutterSpeed");

var ShutterSpeed =
/*#__PURE__*/
function ShutterSpeed(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledShutterSpeed.FilledShutterSpeed, _OutlineShutterSpeed.OutlineShutterSpeed, _RoundShutterSpeed.RoundShutterSpeed, _SharpShutterSpeed.SharpShutterSpeed, _TwoToneShutterSpeed.TwoToneShutterSpeed);
};

exports.ShutterSpeed = ShutterSpeed;