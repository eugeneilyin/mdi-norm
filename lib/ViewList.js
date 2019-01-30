"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledViewList = require("./FilledViewList");

var _OutlineViewList = require("./OutlineViewList");

var _RoundViewList = require("./RoundViewList");

var _SharpViewList = require("./SharpViewList");

var _TwoToneViewList = require("./TwoToneViewList");

var ViewList =
/*#__PURE__*/
function ViewList(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledViewList.FilledViewList, _OutlineViewList.OutlineViewList, _RoundViewList.RoundViewList, _SharpViewList.SharpViewList, _TwoToneViewList.TwoToneViewList);
};

exports.ViewList = ViewList;