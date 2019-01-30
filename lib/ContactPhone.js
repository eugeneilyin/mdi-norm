"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledContactPhone = require("./FilledContactPhone");

var _OutlineContactPhone = require("./OutlineContactPhone");

var _RoundContactPhone = require("./RoundContactPhone");

var _SharpContactPhone = require("./SharpContactPhone");

var _TwoToneContactPhone = require("./TwoToneContactPhone");

var ContactPhone =
/*#__PURE__*/
function ContactPhone(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledContactPhone.FilledContactPhone, _OutlineContactPhone.OutlineContactPhone, _RoundContactPhone.RoundContactPhone, _SharpContactPhone.SharpContactPhone, _TwoToneContactPhone.TwoToneContactPhone);
};

exports.ContactPhone = ContactPhone;