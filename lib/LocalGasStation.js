"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLocalGasStation = require("./FilledLocalGasStation");

var _OutlineLocalGasStation = require("./OutlineLocalGasStation");

var _RoundLocalGasStation = require("./RoundLocalGasStation");

var _SharpLocalGasStation = require("./SharpLocalGasStation");

var _TwoToneLocalGasStation = require("./TwoToneLocalGasStation");

var LocalGasStation =
/*#__PURE__*/
function LocalGasStation(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLocalGasStation.FilledLocalGasStation, _OutlineLocalGasStation.OutlineLocalGasStation, _RoundLocalGasStation.RoundLocalGasStation, _SharpLocalGasStation.SharpLocalGasStation, _TwoToneLocalGasStation.TwoToneLocalGasStation);
};

exports.LocalGasStation = LocalGasStation;