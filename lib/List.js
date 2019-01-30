"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledList = require("./FilledList");

var _OutlineList = require("./OutlineList");

var _RoundList = require("./RoundList");

var _SharpList = require("./SharpList");

var _TwoToneList = require("./TwoToneList");

var List =
/*#__PURE__*/
function List(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledList.FilledList, _OutlineList.OutlineList, _RoundList.RoundList, _SharpList.SharpList, _TwoToneList.TwoToneList);
};

exports.List = List;