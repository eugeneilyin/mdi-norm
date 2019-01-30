"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledScreenLockPortrait = require("./FilledScreenLockPortrait");

var _OutlineScreenLockPortrait = require("./OutlineScreenLockPortrait");

var _RoundScreenLockPortrait = require("./RoundScreenLockPortrait");

var _SharpScreenLockPortrait = require("./SharpScreenLockPortrait");

var _TwoToneScreenLockPortrait = require("./TwoToneScreenLockPortrait");

var ScreenLockPortrait =
/*#__PURE__*/
function ScreenLockPortrait(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledScreenLockPortrait.FilledScreenLockPortrait, _OutlineScreenLockPortrait.OutlineScreenLockPortrait, _RoundScreenLockPortrait.RoundScreenLockPortrait, _SharpScreenLockPortrait.SharpScreenLockPortrait, _TwoToneScreenLockPortrait.TwoToneScreenLockPortrait);
};

exports.ScreenLockPortrait = ScreenLockPortrait;