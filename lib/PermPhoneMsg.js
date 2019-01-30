"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPermPhoneMsg = require("./FilledPermPhoneMsg");

var _OutlinePermPhoneMsg = require("./OutlinePermPhoneMsg");

var _RoundPermPhoneMsg = require("./RoundPermPhoneMsg");

var _SharpPermPhoneMsg = require("./SharpPermPhoneMsg");

var _TwoTonePermPhoneMsg = require("./TwoTonePermPhoneMsg");

var PermPhoneMsg =
/*#__PURE__*/
function PermPhoneMsg(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPermPhoneMsg.FilledPermPhoneMsg, _OutlinePermPhoneMsg.OutlinePermPhoneMsg, _RoundPermPhoneMsg.RoundPermPhoneMsg, _SharpPermPhoneMsg.SharpPermPhoneMsg, _TwoTonePermPhoneMsg.TwoTonePermPhoneMsg);
};

exports.PermPhoneMsg = PermPhoneMsg;