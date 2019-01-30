"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSort = require("./FilledSort");

var _OutlineSort = require("./OutlineSort");

var _RoundSort = require("./RoundSort");

var _SharpSort = require("./SharpSort");

var _TwoToneSort = require("./TwoToneSort");

var Sort =
/*#__PURE__*/
function Sort(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSort.FilledSort, _OutlineSort.OutlineSort, _RoundSort.RoundSort, _SharpSort.SharpSort, _TwoToneSort.TwoToneSort);
};

exports.Sort = Sort;