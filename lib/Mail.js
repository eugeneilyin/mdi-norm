"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledMail = require("./FilledMail");

var _OutlineMail = require("./OutlineMail");

var _RoundMail = require("./RoundMail");

var _SharpMail = require("./SharpMail");

var _TwoToneMail = require("./TwoToneMail");

var Mail =
/*#__PURE__*/
function Mail(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledMail.FilledMail, _OutlineMail.OutlineMail, _RoundMail.RoundMail, _SharpMail.SharpMail, _TwoToneMail.TwoToneMail);
};

exports.Mail = Mail;