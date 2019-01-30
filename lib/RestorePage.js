"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledRestorePage = require("./FilledRestorePage");

var _OutlineRestorePage = require("./OutlineRestorePage");

var _RoundRestorePage = require("./RoundRestorePage");

var _SharpRestorePage = require("./SharpRestorePage");

var _TwoToneRestorePage = require("./TwoToneRestorePage");

var RestorePage =
/*#__PURE__*/
function RestorePage(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledRestorePage.FilledRestorePage, _OutlineRestorePage.OutlineRestorePage, _RoundRestorePage.RoundRestorePage, _SharpRestorePage.SharpRestorePage, _TwoToneRestorePage.TwoToneRestorePage);
};

exports.RestorePage = RestorePage;