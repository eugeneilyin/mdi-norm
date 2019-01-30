"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledComment = require("./FilledComment");

var _OutlineComment = require("./OutlineComment");

var _RoundComment = require("./RoundComment");

var _SharpComment = require("./SharpComment");

var _TwoToneComment = require("./TwoToneComment");

var Comment =
/*#__PURE__*/
function Comment(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledComment.FilledComment, _OutlineComment.OutlineComment, _RoundComment.RoundComment, _SharpComment.SharpComment, _TwoToneComment.TwoToneComment);
};

exports.Comment = Comment;