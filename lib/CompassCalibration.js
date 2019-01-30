"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCompassCalibration = require("./FilledCompassCalibration");

var _OutlineCompassCalibration = require("./OutlineCompassCalibration");

var _RoundCompassCalibration = require("./RoundCompassCalibration");

var _SharpCompassCalibration = require("./SharpCompassCalibration");

var _TwoToneCompassCalibration = require("./TwoToneCompassCalibration");

var CompassCalibration =
/*#__PURE__*/
function CompassCalibration(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCompassCalibration.FilledCompassCalibration, _OutlineCompassCalibration.OutlineCompassCalibration, _RoundCompassCalibration.RoundCompassCalibration, _SharpCompassCalibration.SharpCompassCalibration, _TwoToneCompassCalibration.TwoToneCompassCalibration);
};

exports.CompassCalibration = CompassCalibration;