"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledContactMail = require("./FilledContactMail");

var _OutlineContactMail = require("./OutlineContactMail");

var _RoundContactMail = require("./RoundContactMail");

var _SharpContactMail = require("./SharpContactMail");

var _TwoToneContactMail = require("./TwoToneContactMail");

var ContactMail =
/*#__PURE__*/
function ContactMail(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledContactMail.FilledContactMail, _OutlineContactMail.OutlineContactMail, _RoundContactMail.RoundContactMail, _SharpContactMail.SharpContactMail, _TwoToneContactMail.TwoToneContactMail);
};

exports.ContactMail = ContactMail;