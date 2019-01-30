"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledModeComment = require("./FilledModeComment");

var _OutlineModeComment = require("./OutlineModeComment");

var _RoundModeComment = require("./RoundModeComment");

var _SharpModeComment = require("./SharpModeComment");

var _TwoToneModeComment = require("./TwoToneModeComment");

var ModeComment =
/*#__PURE__*/
function ModeComment(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledModeComment.FilledModeComment, _OutlineModeComment.OutlineModeComment, _RoundModeComment.RoundModeComment, _SharpModeComment.SharpModeComment, _TwoToneModeComment.TwoToneModeComment);
};

exports.ModeComment = ModeComment;