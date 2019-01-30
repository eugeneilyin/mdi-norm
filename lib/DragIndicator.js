"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDragIndicator = require("./FilledDragIndicator");

var _OutlineDragIndicator = require("./OutlineDragIndicator");

var _RoundDragIndicator = require("./RoundDragIndicator");

var _SharpDragIndicator = require("./SharpDragIndicator");

var _TwoToneDragIndicator = require("./TwoToneDragIndicator");

var DragIndicator =
/*#__PURE__*/
function DragIndicator(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDragIndicator.FilledDragIndicator, _OutlineDragIndicator.OutlineDragIndicator, _RoundDragIndicator.RoundDragIndicator, _SharpDragIndicator.SharpDragIndicator, _TwoToneDragIndicator.TwoToneDragIndicator);
};

exports.DragIndicator = DragIndicator;