"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAddComment = require("./FilledAddComment");

var _OutlineAddComment = require("./OutlineAddComment");

var _RoundAddComment = require("./RoundAddComment");

var _SharpAddComment = require("./SharpAddComment");

var _TwoToneAddComment = require("./TwoToneAddComment");

var AddComment =
/*#__PURE__*/
function AddComment(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAddComment.FilledAddComment, _OutlineAddComment.OutlineAddComment, _RoundAddComment.RoundAddComment, _SharpAddComment.SharpAddComment, _TwoToneAddComment.TwoToneAddComment);
};

exports.AddComment = AddComment;