"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLocalHotel = require("./FilledLocalHotel");

var _OutlineLocalHotel = require("./OutlineLocalHotel");

var _RoundLocalHotel = require("./RoundLocalHotel");

var _SharpLocalHotel = require("./SharpLocalHotel");

var _TwoToneLocalHotel = require("./TwoToneLocalHotel");

var LocalHotel =
/*#__PURE__*/
function LocalHotel(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLocalHotel.FilledLocalHotel, _OutlineLocalHotel.OutlineLocalHotel, _RoundLocalHotel.RoundLocalHotel, _SharpLocalHotel.SharpLocalHotel, _TwoToneLocalHotel.TwoToneLocalHotel);
};

exports.LocalHotel = LocalHotel;