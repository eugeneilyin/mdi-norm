"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAvTimer = require("./FilledAvTimer");

var _OutlineAvTimer = require("./OutlineAvTimer");

var _RoundAvTimer = require("./RoundAvTimer");

var _SharpAvTimer = require("./SharpAvTimer");

var _TwoToneAvTimer = require("./TwoToneAvTimer");

var AvTimer =
/*#__PURE__*/
function AvTimer(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAvTimer.FilledAvTimer, _OutlineAvTimer.OutlineAvTimer, _RoundAvTimer.RoundAvTimer, _SharpAvTimer.SharpAvTimer, _TwoToneAvTimer.TwoToneAvTimer);
};

exports.AvTimer = AvTimer;