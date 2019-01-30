"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDirectionsWalk = require("./FilledDirectionsWalk");

var _OutlineDirectionsWalk = require("./OutlineDirectionsWalk");

var _RoundDirectionsWalk = require("./RoundDirectionsWalk");

var _SharpDirectionsWalk = require("./SharpDirectionsWalk");

var _TwoToneDirectionsWalk = require("./TwoToneDirectionsWalk");

var DirectionsWalk =
/*#__PURE__*/
function DirectionsWalk(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDirectionsWalk.FilledDirectionsWalk, _OutlineDirectionsWalk.OutlineDirectionsWalk, _RoundDirectionsWalk.RoundDirectionsWalk, _SharpDirectionsWalk.SharpDirectionsWalk, _TwoToneDirectionsWalk.TwoToneDirectionsWalk);
};

exports.DirectionsWalk = DirectionsWalk;