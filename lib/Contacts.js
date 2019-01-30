"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledContacts = require("./FilledContacts");

var _OutlineContacts = require("./OutlineContacts");

var _RoundContacts = require("./RoundContacts");

var _SharpContacts = require("./SharpContacts");

var _TwoToneContacts = require("./TwoToneContacts");

var Contacts =
/*#__PURE__*/
function Contacts(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledContacts.FilledContacts, _OutlineContacts.OutlineContacts, _RoundContacts.RoundContacts, _SharpContacts.SharpContacts, _TwoToneContacts.TwoToneContacts);
};

exports.Contacts = Contacts;