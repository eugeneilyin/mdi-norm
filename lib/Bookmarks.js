"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBookmarks = require("./FilledBookmarks");

var _OutlineBookmarks = require("./OutlineBookmarks");

var _RoundBookmarks = require("./RoundBookmarks");

var _SharpBookmarks = require("./SharpBookmarks");

var _TwoToneBookmarks = require("./TwoToneBookmarks");

var Bookmarks =
/*#__PURE__*/
function Bookmarks(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBookmarks.FilledBookmarks, _OutlineBookmarks.OutlineBookmarks, _RoundBookmarks.RoundBookmarks, _SharpBookmarks.SharpBookmarks, _TwoToneBookmarks.TwoToneBookmarks);
};

exports.Bookmarks = Bookmarks;