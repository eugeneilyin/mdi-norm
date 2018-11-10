"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconLooksFilled = require("./IconLooksFilled");

var _IconLooksOutlined = require("./IconLooksOutlined");

var _IconLooksRounded = require("./IconLooksRounded");

var _IconLooksSharp = require("./IconLooksSharp");

var _IconLooksTwoTone = require("./IconLooksTwoTone");

var IconLooks =
/*#__PURE__*/
function IconLooks(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconLooksFilled.IconLooksFilled, _IconLooksOutlined.IconLooksOutlined, _IconLooksRounded.IconLooksRounded, _IconLooksSharp.IconLooksSharp, _IconLooksTwoTone.IconLooksTwoTone);
};

exports.IconLooks = IconLooks;