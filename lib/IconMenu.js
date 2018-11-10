"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconMenuFilled = require("./IconMenuFilled");

var _IconMenuOutlined = require("./IconMenuOutlined");

var _IconMenuRounded = require("./IconMenuRounded");

var _IconMenuSharp = require("./IconMenuSharp");

var _IconMenuTwoTone = require("./IconMenuTwoTone");

var IconMenu =
/*#__PURE__*/
function IconMenu(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconMenuFilled.IconMenuFilled, _IconMenuOutlined.IconMenuOutlined, _IconMenuRounded.IconMenuRounded, _IconMenuSharp.IconMenuSharp, _IconMenuTwoTone.IconMenuTwoTone);
};

exports.IconMenu = IconMenu;