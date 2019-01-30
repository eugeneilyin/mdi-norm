"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLocalAirport = require("./FilledLocalAirport");

var _OutlineLocalAirport = require("./OutlineLocalAirport");

var _RoundLocalAirport = require("./RoundLocalAirport");

var _SharpLocalAirport = require("./SharpLocalAirport");

var _TwoToneLocalAirport = require("./TwoToneLocalAirport");

var LocalAirport =
/*#__PURE__*/
function LocalAirport(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLocalAirport.FilledLocalAirport, _OutlineLocalAirport.OutlineLocalAirport, _RoundLocalAirport.RoundLocalAirport, _SharpLocalAirport.SharpLocalAirport, _TwoToneLocalAirport.TwoToneLocalAirport);
};

exports.LocalAirport = LocalAirport;