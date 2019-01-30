"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledEmail = require("./FilledEmail");

var _OutlineEmail = require("./OutlineEmail");

var _RoundEmail = require("./RoundEmail");

var _SharpEmail = require("./SharpEmail");

var _TwoToneEmail = require("./TwoToneEmail");

var Email =
/*#__PURE__*/
function Email(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledEmail.FilledEmail, _OutlineEmail.OutlineEmail, _RoundEmail.RoundEmail, _SharpEmail.SharpEmail, _TwoToneEmail.TwoToneEmail);
};

exports.Email = Email;