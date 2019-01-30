"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledViewColumn = require("./FilledViewColumn");

var _OutlineViewColumn = require("./OutlineViewColumn");

var _RoundViewColumn = require("./RoundViewColumn");

var _SharpViewColumn = require("./SharpViewColumn");

var _TwoToneViewColumn = require("./TwoToneViewColumn");

var ViewColumn =
/*#__PURE__*/
function ViewColumn(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledViewColumn.FilledViewColumn, _OutlineViewColumn.OutlineViewColumn, _RoundViewColumn.RoundViewColumn, _SharpViewColumn.SharpViewColumn, _TwoToneViewColumn.TwoToneViewColumn);
};

exports.ViewColumn = ViewColumn;