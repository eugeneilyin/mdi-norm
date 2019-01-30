"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDirectionsRun = require("./FilledDirectionsRun");

var _OutlineDirectionsRun = require("./OutlineDirectionsRun");

var _RoundDirectionsRun = require("./RoundDirectionsRun");

var _SharpDirectionsRun = require("./SharpDirectionsRun");

var _TwoToneDirectionsRun = require("./TwoToneDirectionsRun");

var DirectionsRun =
/*#__PURE__*/
function DirectionsRun(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDirectionsRun.FilledDirectionsRun, _OutlineDirectionsRun.OutlineDirectionsRun, _RoundDirectionsRun.RoundDirectionsRun, _SharpDirectionsRun.SharpDirectionsRun, _TwoToneDirectionsRun.TwoToneDirectionsRun);
};

exports.DirectionsRun = DirectionsRun;