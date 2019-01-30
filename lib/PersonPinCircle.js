"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPersonPinCircle = require("./FilledPersonPinCircle");

var _OutlinePersonPinCircle = require("./OutlinePersonPinCircle");

var _RoundPersonPinCircle = require("./RoundPersonPinCircle");

var _SharpPersonPinCircle = require("./SharpPersonPinCircle");

var _TwoTonePersonPinCircle = require("./TwoTonePersonPinCircle");

var PersonPinCircle =
/*#__PURE__*/
function PersonPinCircle(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPersonPinCircle.FilledPersonPinCircle, _OutlinePersonPinCircle.OutlinePersonPinCircle, _RoundPersonPinCircle.RoundPersonPinCircle, _SharpPersonPinCircle.SharpPersonPinCircle, _TwoTonePersonPinCircle.TwoTonePersonPinCircle);
};

exports.PersonPinCircle = PersonPinCircle;