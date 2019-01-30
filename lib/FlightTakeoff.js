"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFlightTakeoff = require("./FilledFlightTakeoff");

var _OutlineFlightTakeoff = require("./OutlineFlightTakeoff");

var _RoundFlightTakeoff = require("./RoundFlightTakeoff");

var _SharpFlightTakeoff = require("./SharpFlightTakeoff");

var _TwoToneFlightTakeoff = require("./TwoToneFlightTakeoff");

var FlightTakeoff =
/*#__PURE__*/
function FlightTakeoff(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFlightTakeoff.FilledFlightTakeoff, _OutlineFlightTakeoff.OutlineFlightTakeoff, _RoundFlightTakeoff.RoundFlightTakeoff, _SharpFlightTakeoff.SharpFlightTakeoff, _TwoToneFlightTakeoff.TwoToneFlightTakeoff);
};

exports.FlightTakeoff = FlightTakeoff;