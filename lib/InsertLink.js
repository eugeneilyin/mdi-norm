"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledInsertLink = require("./FilledInsertLink");

var _OutlineInsertLink = require("./OutlineInsertLink");

var _RoundInsertLink = require("./RoundInsertLink");

var _SharpInsertLink = require("./SharpInsertLink");

var _TwoToneInsertLink = require("./TwoToneInsertLink");

var InsertLink =
/*#__PURE__*/
function InsertLink(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledInsertLink.FilledInsertLink, _OutlineInsertLink.OutlineInsertLink, _RoundInsertLink.RoundInsertLink, _SharpInsertLink.SharpInsertLink, _TwoToneInsertLink.TwoToneInsertLink);
};

exports.InsertLink = InsertLink;