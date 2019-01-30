"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledReply = require("./FilledReply");

var _OutlineReply = require("./OutlineReply");

var _RoundReply = require("./RoundReply");

var _SharpReply = require("./SharpReply");

var _TwoToneReply = require("./TwoToneReply");

var Reply =
/*#__PURE__*/
function Reply(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledReply.FilledReply, _OutlineReply.OutlineReply, _RoundReply.RoundReply, _SharpReply.SharpReply, _TwoToneReply.TwoToneReply);
};

exports.Reply = Reply;