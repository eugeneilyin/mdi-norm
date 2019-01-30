"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBookmarkBorder = require("./FilledBookmarkBorder");

var _OutlineBookmarkBorder = require("./OutlineBookmarkBorder");

var _RoundBookmarkBorder = require("./RoundBookmarkBorder");

var _SharpBookmarkBorder = require("./SharpBookmarkBorder");

var _TwoToneBookmarkBorder = require("./TwoToneBookmarkBorder");

var BookmarkBorder =
/*#__PURE__*/
function BookmarkBorder(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBookmarkBorder.FilledBookmarkBorder, _OutlineBookmarkBorder.OutlineBookmarkBorder, _RoundBookmarkBorder.RoundBookmarkBorder, _SharpBookmarkBorder.SharpBookmarkBorder, _TwoToneBookmarkBorder.TwoToneBookmarkBorder);
};

exports.BookmarkBorder = BookmarkBorder;