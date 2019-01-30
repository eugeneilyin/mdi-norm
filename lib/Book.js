"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBook = require("./FilledBook");

var _OutlineBook = require("./OutlineBook");

var _RoundBook = require("./RoundBook");

var _SharpBook = require("./SharpBook");

var _TwoToneBook = require("./TwoToneBook");

var Book =
/*#__PURE__*/
function Book(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBook.FilledBook, _OutlineBook.OutlineBook, _RoundBook.RoundBook, _SharpBook.SharpBook, _TwoToneBook.TwoToneBook);
};

exports.Book = Book;