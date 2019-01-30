"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBookmark = require("./FilledBookmark");

var _OutlineBookmark = require("./OutlineBookmark");

var _RoundBookmark = require("./RoundBookmark");

var _SharpBookmark = require("./SharpBookmark");

var _TwoToneBookmark = require("./TwoToneBookmark");

var Bookmark =
/*#__PURE__*/
function Bookmark(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBookmark.FilledBookmark, _OutlineBookmark.OutlineBookmark, _RoundBookmark.RoundBookmark, _SharpBookmark.SharpBookmark, _TwoToneBookmark.TwoToneBookmark);
};

exports.Bookmark = Bookmark;