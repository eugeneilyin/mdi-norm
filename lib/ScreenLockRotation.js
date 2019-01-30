"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledScreenLockRotation = require("./FilledScreenLockRotation");

var _OutlineScreenLockRotation = require("./OutlineScreenLockRotation");

var _RoundScreenLockRotation = require("./RoundScreenLockRotation");

var _SharpScreenLockRotation = require("./SharpScreenLockRotation");

var _TwoToneScreenLockRotation = require("./TwoToneScreenLockRotation");

var ScreenLockRotation =
/*#__PURE__*/
function ScreenLockRotation(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledScreenLockRotation.FilledScreenLockRotation, _OutlineScreenLockRotation.OutlineScreenLockRotation, _RoundScreenLockRotation.RoundScreenLockRotation, _SharpScreenLockRotation.SharpScreenLockRotation, _TwoToneScreenLockRotation.TwoToneScreenLockRotation);
};

exports.ScreenLockRotation = ScreenLockRotation;