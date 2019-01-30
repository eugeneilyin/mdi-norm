"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPhoneCallback = require("./FilledPhoneCallback");

var _OutlinePhoneCallback = require("./OutlinePhoneCallback");

var _RoundPhoneCallback = require("./RoundPhoneCallback");

var _SharpPhoneCallback = require("./SharpPhoneCallback");

var _TwoTonePhoneCallback = require("./TwoTonePhoneCallback");

var PhoneCallback =
/*#__PURE__*/
function PhoneCallback(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPhoneCallback.FilledPhoneCallback, _OutlinePhoneCallback.OutlinePhoneCallback, _RoundPhoneCallback.RoundPhoneCallback, _SharpPhoneCallback.SharpPhoneCallback, _TwoTonePhoneCallback.TwoTonePhoneCallback);
};

exports.PhoneCallback = PhoneCallback;