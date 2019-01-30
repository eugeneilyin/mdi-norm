"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledTripOrigin = require("./FilledTripOrigin");

var _OutlineTripOrigin = require("./OutlineTripOrigin");

var _RoundTripOrigin = require("./RoundTripOrigin");

var _SharpTripOrigin = require("./SharpTripOrigin");

var _TwoToneTripOrigin = require("./TwoToneTripOrigin");

var TripOrigin =
/*#__PURE__*/
function TripOrigin(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledTripOrigin.FilledTripOrigin, _OutlineTripOrigin.OutlineTripOrigin, _RoundTripOrigin.RoundTripOrigin, _SharpTripOrigin.SharpTripOrigin, _TwoToneTripOrigin.TwoToneTripOrigin);
};

exports.TripOrigin = TripOrigin;