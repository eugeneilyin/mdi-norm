"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLibraryBooks = require("./FilledLibraryBooks");

var _OutlineLibraryBooks = require("./OutlineLibraryBooks");

var _RoundLibraryBooks = require("./RoundLibraryBooks");

var _SharpLibraryBooks = require("./SharpLibraryBooks");

var _TwoToneLibraryBooks = require("./TwoToneLibraryBooks");

var LibraryBooks =
/*#__PURE__*/
function LibraryBooks(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLibraryBooks.FilledLibraryBooks, _OutlineLibraryBooks.OutlineLibraryBooks, _RoundLibraryBooks.RoundLibraryBooks, _SharpLibraryBooks.SharpLibraryBooks, _TwoToneLibraryBooks.TwoToneLibraryBooks);
};

exports.LibraryBooks = LibraryBooks;