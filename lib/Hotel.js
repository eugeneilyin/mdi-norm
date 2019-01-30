"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledHotel = require("./FilledHotel");

var _OutlineHotel = require("./OutlineHotel");

var _RoundHotel = require("./RoundHotel");

var _SharpHotel = require("./SharpHotel");

var _TwoToneHotel = require("./TwoToneHotel");

var Hotel =
/*#__PURE__*/
function Hotel(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledHotel.FilledHotel, _OutlineHotel.OutlineHotel, _RoundHotel.RoundHotel, _SharpHotel.SharpHotel, _TwoToneHotel.TwoToneHotel);
};

exports.Hotel = Hotel;