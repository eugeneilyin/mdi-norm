"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconGestureFilled = require("./IconGestureFilled");

var _IconGestureOutlined = require("./IconGestureOutlined");

var _IconGestureRounded = require("./IconGestureRounded");

var _IconGestureSharp = require("./IconGestureSharp");

var _IconGestureTwoTone = require("./IconGestureTwoTone");

var IconGesture =
/*#__PURE__*/
function IconGesture(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconGestureFilled.IconGestureFilled, _IconGestureOutlined.IconGestureOutlined, _IconGestureRounded.IconGestureRounded, _IconGestureSharp.IconGestureSharp, _IconGestureTwoTone.IconGestureTwoTone);
};

exports.IconGesture = IconGesture;