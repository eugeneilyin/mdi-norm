"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPersonPin = require("./FilledPersonPin");

var _OutlinePersonPin = require("./OutlinePersonPin");

var _RoundPersonPin = require("./RoundPersonPin");

var _SharpPersonPin = require("./SharpPersonPin");

var _TwoTonePersonPin = require("./TwoTonePersonPin");

var PersonPin =
/*#__PURE__*/
function PersonPin(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPersonPin.FilledPersonPin, _OutlinePersonPin.OutlinePersonPin, _RoundPersonPin.RoundPersonPin, _SharpPersonPin.SharpPersonPin, _TwoTonePersonPin.TwoTonePersonPin);
};

exports.PersonPin = PersonPin;