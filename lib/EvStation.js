"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledEvStation = require("./FilledEvStation");

var _OutlineEvStation = require("./OutlineEvStation");

var _RoundEvStation = require("./RoundEvStation");

var _SharpEvStation = require("./SharpEvStation");

var _TwoToneEvStation = require("./TwoToneEvStation");

var EvStation =
/*#__PURE__*/
function EvStation(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledEvStation.FilledEvStation, _OutlineEvStation.OutlineEvStation, _RoundEvStation.RoundEvStation, _SharpEvStation.SharpEvStation, _TwoToneEvStation.TwoToneEvStation);
};

exports.EvStation = EvStation;