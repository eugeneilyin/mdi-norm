"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSearch = require("./FilledSearch");

var _OutlineSearch = require("./OutlineSearch");

var _RoundSearch = require("./RoundSearch");

var _SharpSearch = require("./SharpSearch");

var _TwoToneSearch = require("./TwoToneSearch");

var Search =
/*#__PURE__*/
function Search(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSearch.FilledSearch, _OutlineSearch.OutlineSearch, _RoundSearch.RoundSearch, _SharpSearch.SharpSearch, _TwoToneSearch.TwoToneSearch);
};

exports.Search = Search;