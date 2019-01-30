"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPinDrop = require("./FilledPinDrop");

var _OutlinePinDrop = require("./OutlinePinDrop");

var _RoundPinDrop = require("./RoundPinDrop");

var _SharpPinDrop = require("./SharpPinDrop");

var _TwoTonePinDrop = require("./TwoTonePinDrop");

var PinDrop =
/*#__PURE__*/
function PinDrop(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPinDrop.FilledPinDrop, _OutlinePinDrop.OutlinePinDrop, _RoundPinDrop.RoundPinDrop, _SharpPinDrop.SharpPinDrop, _TwoTonePinDrop.TwoTonePinDrop);
};

exports.PinDrop = PinDrop;