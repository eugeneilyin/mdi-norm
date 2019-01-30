"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDragHandle = require("./FilledDragHandle");

var _OutlineDragHandle = require("./OutlineDragHandle");

var _RoundDragHandle = require("./RoundDragHandle");

var _SharpDragHandle = require("./SharpDragHandle");

var _TwoToneDragHandle = require("./TwoToneDragHandle");

var DragHandle =
/*#__PURE__*/
function DragHandle(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDragHandle.FilledDragHandle, _OutlineDragHandle.OutlineDragHandle, _RoundDragHandle.RoundDragHandle, _SharpDragHandle.SharpDragHandle, _TwoToneDragHandle.TwoToneDragHandle);
};

exports.DragHandle = DragHandle;