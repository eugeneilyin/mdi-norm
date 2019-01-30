"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFlight = require("./FilledFlight");

var _OutlineFlight = require("./OutlineFlight");

var _RoundFlight = require("./RoundFlight");

var _SharpFlight = require("./SharpFlight");

var _TwoToneFlight = require("./TwoToneFlight");

var Flight =
/*#__PURE__*/
function Flight(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFlight.FilledFlight, _OutlineFlight.OutlineFlight, _RoundFlight.RoundFlight, _SharpFlight.SharpFlight, _TwoToneFlight.TwoToneFlight);
};

exports.Flight = Flight;