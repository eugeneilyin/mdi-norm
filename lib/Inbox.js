"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledInbox = require("./FilledInbox");

var _OutlineInbox = require("./OutlineInbox");

var _RoundInbox = require("./RoundInbox");

var _SharpInbox = require("./SharpInbox");

var _TwoToneInbox = require("./TwoToneInbox");

var Inbox =
/*#__PURE__*/
function Inbox(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledInbox.FilledInbox, _OutlineInbox.OutlineInbox, _RoundInbox.RoundInbox, _SharpInbox.SharpInbox, _TwoToneInbox.TwoToneInbox);
};

exports.Inbox = Inbox;