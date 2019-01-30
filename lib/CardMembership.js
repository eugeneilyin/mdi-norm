"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCardMembership = require("./FilledCardMembership");

var _OutlineCardMembership = require("./OutlineCardMembership");

var _RoundCardMembership = require("./RoundCardMembership");

var _SharpCardMembership = require("./SharpCardMembership");

var _TwoToneCardMembership = require("./TwoToneCardMembership");

var CardMembership =
/*#__PURE__*/
function CardMembership(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCardMembership.FilledCardMembership, _OutlineCardMembership.OutlineCardMembership, _RoundCardMembership.RoundCardMembership, _SharpCardMembership.SharpCardMembership, _TwoToneCardMembership.TwoToneCardMembership);
};

exports.CardMembership = CardMembership;