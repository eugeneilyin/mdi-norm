"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledInsertComment = require("./FilledInsertComment");

var _OutlineInsertComment = require("./OutlineInsertComment");

var _RoundInsertComment = require("./RoundInsertComment");

var _SharpInsertComment = require("./SharpInsertComment");

var _TwoToneInsertComment = require("./TwoToneInsertComment");

var InsertComment =
/*#__PURE__*/
function InsertComment(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledInsertComment.FilledInsertComment, _OutlineInsertComment.OutlineInsertComment, _RoundInsertComment.RoundInsertComment, _SharpInsertComment.SharpInsertComment, _TwoToneInsertComment.TwoToneInsertComment);
};

exports.InsertComment = InsertComment;