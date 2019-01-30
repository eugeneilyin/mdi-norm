"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFilterList = require("./FilledFilterList");

var _OutlineFilterList = require("./OutlineFilterList");

var _RoundFilterList = require("./RoundFilterList");

var _SharpFilterList = require("./SharpFilterList");

var _TwoToneFilterList = require("./TwoToneFilterList");

var FilterList =
/*#__PURE__*/
function FilterList(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFilterList.FilledFilterList, _OutlineFilterList.OutlineFilterList, _RoundFilterList.RoundFilterList, _SharpFilterList.SharpFilterList, _TwoToneFilterList.TwoToneFilterList);
};

exports.FilterList = FilterList;