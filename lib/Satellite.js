"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSatellite = require("./FilledSatellite");

var _OutlineSatellite = require("./OutlineSatellite");

var _RoundSatellite = require("./RoundSatellite");

var _SharpSatellite = require("./SharpSatellite");

var _TwoToneSatellite = require("./TwoToneSatellite");

var Satellite =
/*#__PURE__*/
function Satellite(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSatellite.FilledSatellite, _OutlineSatellite.OutlineSatellite, _RoundSatellite.RoundSatellite, _SharpSatellite.SharpSatellite, _TwoToneSatellite.TwoToneSatellite);
};

exports.Satellite = Satellite;