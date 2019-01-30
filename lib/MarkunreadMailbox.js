"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledMarkunreadMailbox = require("./FilledMarkunreadMailbox");

var _OutlineMarkunreadMailbox = require("./OutlineMarkunreadMailbox");

var _RoundMarkunreadMailbox = require("./RoundMarkunreadMailbox");

var _SharpMarkunreadMailbox = require("./SharpMarkunreadMailbox");

var _TwoToneMarkunreadMailbox = require("./TwoToneMarkunreadMailbox");

var MarkunreadMailbox =
/*#__PURE__*/
function MarkunreadMailbox(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledMarkunreadMailbox.FilledMarkunreadMailbox, _OutlineMarkunreadMailbox.OutlineMarkunreadMailbox, _RoundMarkunreadMailbox.RoundMarkunreadMailbox, _SharpMarkunreadMailbox.SharpMarkunreadMailbox, _TwoToneMarkunreadMailbox.TwoToneMarkunreadMailbox);
};

exports.MarkunreadMailbox = MarkunreadMailbox;