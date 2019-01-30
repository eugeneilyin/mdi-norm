"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAirportShuttle = require("./FilledAirportShuttle");

var _OutlineAirportShuttle = require("./OutlineAirportShuttle");

var _RoundAirportShuttle = require("./RoundAirportShuttle");

var _SharpAirportShuttle = require("./SharpAirportShuttle");

var _TwoToneAirportShuttle = require("./TwoToneAirportShuttle");

var AirportShuttle =
/*#__PURE__*/
function AirportShuttle(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAirportShuttle.FilledAirportShuttle, _OutlineAirportShuttle.OutlineAirportShuttle, _RoundAirportShuttle.RoundAirportShuttle, _SharpAirportShuttle.SharpAirportShuttle, _TwoToneAirportShuttle.TwoToneAirportShuttle);
};

exports.AirportShuttle = AirportShuttle;