"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFlightLand = require("./FilledFlightLand");

var _OutlineFlightLand = require("./OutlineFlightLand");

var _RoundFlightLand = require("./RoundFlightLand");

var _SharpFlightLand = require("./SharpFlightLand");

var _TwoToneFlightLand = require("./TwoToneFlightLand");

var FlightLand =
/*#__PURE__*/
function FlightLand(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFlightLand.FilledFlightLand, _OutlineFlightLand.OutlineFlightLand, _RoundFlightLand.RoundFlightLand, _SharpFlightLand.SharpFlightLand, _TwoToneFlightLand.TwoToneFlightLand);
};

exports.FlightLand = FlightLand;