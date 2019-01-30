"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFiberPin = require("./FilledFiberPin");

var _OutlineFiberPin = require("./OutlineFiberPin");

var _RoundFiberPin = require("./RoundFiberPin");

var _SharpFiberPin = require("./SharpFiberPin");

var _TwoToneFiberPin = require("./TwoToneFiberPin");

var FiberPin =
/*#__PURE__*/
function FiberPin(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFiberPin.FilledFiberPin, _OutlineFiberPin.OutlineFiberPin, _RoundFiberPin.RoundFiberPin, _SharpFiberPin.SharpFiberPin, _TwoToneFiberPin.TwoToneFiberPin);
};

exports.FiberPin = FiberPin;