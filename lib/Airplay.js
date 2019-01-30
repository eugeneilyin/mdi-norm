"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAirplay = require("./FilledAirplay");

var _OutlineAirplay = require("./OutlineAirplay");

var _RoundAirplay = require("./RoundAirplay");

var _SharpAirplay = require("./SharpAirplay");

var _TwoToneAirplay = require("./TwoToneAirplay");

var Airplay =
/*#__PURE__*/
function Airplay(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAirplay.FilledAirplay, _OutlineAirplay.OutlineAirplay, _RoundAirplay.RoundAirplay, _SharpAirplay.SharpAirplay, _TwoToneAirplay.TwoToneAirplay);
};

exports.Airplay = Airplay;