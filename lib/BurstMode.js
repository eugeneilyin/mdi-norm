"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBurstMode = require("./FilledBurstMode");

var _OutlineBurstMode = require("./OutlineBurstMode");

var _RoundBurstMode = require("./RoundBurstMode");

var _SharpBurstMode = require("./SharpBurstMode");

var _TwoToneBurstMode = require("./TwoToneBurstMode");

var BurstMode =
/*#__PURE__*/
function BurstMode(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBurstMode.FilledBurstMode, _OutlineBurstMode.OutlineBurstMode, _RoundBurstMode.RoundBurstMode, _SharpBurstMode.SharpBurstMode, _TwoToneBurstMode.TwoToneBurstMode);
};

exports.BurstMode = BurstMode;