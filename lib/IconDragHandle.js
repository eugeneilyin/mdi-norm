"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconDragHandleFilled = require("./IconDragHandleFilled");

var _IconDragHandleOutlined = require("./IconDragHandleOutlined");

var _IconDragHandleRounded = require("./IconDragHandleRounded");

var _IconDragHandleSharp = require("./IconDragHandleSharp");

var _IconDragHandleTwoTone = require("./IconDragHandleTwoTone");

var IconDragHandle =
/*#__PURE__*/
function IconDragHandle(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconDragHandleFilled.IconDragHandleFilled, _IconDragHandleOutlined.IconDragHandleOutlined, _IconDragHandleRounded.IconDragHandleRounded, _IconDragHandleSharp.IconDragHandleSharp, _IconDragHandleTwoTone.IconDragHandleTwoTone);
};

exports.IconDragHandle = IconDragHandle;