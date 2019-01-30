"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDirectionsBoat = require("./FilledDirectionsBoat");

var _OutlineDirectionsBoat = require("./OutlineDirectionsBoat");

var _RoundDirectionsBoat = require("./RoundDirectionsBoat");

var _SharpDirectionsBoat = require("./SharpDirectionsBoat");

var _TwoToneDirectionsBoat = require("./TwoToneDirectionsBoat");

var DirectionsBoat =
/*#__PURE__*/
function DirectionsBoat(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDirectionsBoat.FilledDirectionsBoat, _OutlineDirectionsBoat.OutlineDirectionsBoat, _RoundDirectionsBoat.RoundDirectionsBoat, _SharpDirectionsBoat.SharpDirectionsBoat, _TwoToneDirectionsBoat.TwoToneDirectionsBoat);
};

exports.DirectionsBoat = DirectionsBoat;