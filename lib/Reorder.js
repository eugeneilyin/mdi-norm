"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledReorder = require("./FilledReorder");

var _OutlineReorder = require("./OutlineReorder");

var _RoundReorder = require("./RoundReorder");

var _SharpReorder = require("./SharpReorder");

var _TwoToneReorder = require("./TwoToneReorder");

var Reorder =
/*#__PURE__*/
function Reorder(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledReorder.FilledReorder, _OutlineReorder.OutlineReorder, _RoundReorder.RoundReorder, _SharpReorder.SharpReorder, _TwoToneReorder.TwoToneReorder);
};

exports.Reorder = Reorder;