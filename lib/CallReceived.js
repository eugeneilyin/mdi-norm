"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCallReceived = require("./FilledCallReceived");

var _OutlineCallReceived = require("./OutlineCallReceived");

var _RoundCallReceived = require("./RoundCallReceived");

var _SharpCallReceived = require("./SharpCallReceived");

var _TwoToneCallReceived = require("./TwoToneCallReceived");

var CallReceived =
/*#__PURE__*/
function CallReceived(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCallReceived.FilledCallReceived, _OutlineCallReceived.OutlineCallReceived, _RoundCallReceived.RoundCallReceived, _SharpCallReceived.SharpCallReceived, _TwoToneCallReceived.TwoToneCallReceived);
};

exports.CallReceived = CallReceived;