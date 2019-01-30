"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBluetooth = require("./FilledBluetooth");

var _OutlineBluetooth = require("./OutlineBluetooth");

var _RoundBluetooth = require("./RoundBluetooth");

var _SharpBluetooth = require("./SharpBluetooth");

var _TwoToneBluetooth = require("./TwoToneBluetooth");

var Bluetooth =
/*#__PURE__*/
function Bluetooth(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBluetooth.FilledBluetooth, _OutlineBluetooth.OutlineBluetooth, _RoundBluetooth.RoundBluetooth, _SharpBluetooth.SharpBluetooth, _TwoToneBluetooth.TwoToneBluetooth);
};

exports.Bluetooth = Bluetooth;