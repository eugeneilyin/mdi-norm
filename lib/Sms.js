"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSms = require("./FilledSms");

var _OutlineSms = require("./OutlineSms");

var _RoundSms = require("./RoundSms");

var _SharpSms = require("./SharpSms");

var _TwoToneSms = require("./TwoToneSms");

var Sms =
/*#__PURE__*/
function Sms(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSms.FilledSms, _OutlineSms.OutlineSms, _RoundSms.RoundSms, _SharpSms.SharpSms, _TwoToneSms.TwoToneSms);
};

exports.Sms = Sms;