"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconDockFilled = require("./IconDockFilled");

var _IconDockOutlined = require("./IconDockOutlined");

var _IconDockRounded = require("./IconDockRounded");

var _IconDockSharp = require("./IconDockSharp");

var _IconDockTwoTone = require("./IconDockTwoTone");

var IconDock =
/*#__PURE__*/
function IconDock(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconDockFilled.IconDockFilled, _IconDockOutlined.IconDockOutlined, _IconDockRounded.IconDockRounded, _IconDockSharp.IconDockSharp, _IconDockTwoTone.IconDockTwoTone);
};

exports.IconDock = IconDock;