"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDirectionsTransit = require("./FilledDirectionsTransit");

var _OutlineDirectionsTransit = require("./OutlineDirectionsTransit");

var _RoundDirectionsTransit = require("./RoundDirectionsTransit");

var _SharpDirectionsTransit = require("./SharpDirectionsTransit");

var _TwoToneDirectionsTransit = require("./TwoToneDirectionsTransit");

var DirectionsTransit =
/*#__PURE__*/
function DirectionsTransit(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDirectionsTransit.FilledDirectionsTransit, _OutlineDirectionsTransit.OutlineDirectionsTransit, _RoundDirectionsTransit.RoundDirectionsTransit, _SharpDirectionsTransit.SharpDirectionsTransit, _TwoToneDirectionsTransit.TwoToneDirectionsTransit);
};

exports.DirectionsTransit = DirectionsTransit;