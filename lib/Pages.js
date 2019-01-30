"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPages = require("./FilledPages");

var _OutlinePages = require("./OutlinePages");

var _RoundPages = require("./RoundPages");

var _SharpPages = require("./SharpPages");

var _TwoTonePages = require("./TwoTonePages");

var Pages =
/*#__PURE__*/
function Pages(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPages.FilledPages, _OutlinePages.OutlinePages, _RoundPages.RoundPages, _SharpPages.SharpPages, _TwoTonePages.TwoTonePages);
};

exports.Pages = Pages;