"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconBorderStyleFilled = require("./IconBorderStyleFilled");

var _IconBorderStyleOutlined = require("./IconBorderStyleOutlined");

var _IconBorderStyleRounded = require("./IconBorderStyleRounded");

var _IconBorderStyleSharp = require("./IconBorderStyleSharp");

var _IconBorderStyleTwoTone = require("./IconBorderStyleTwoTone");

var IconBorderStyle =
/*#__PURE__*/
function IconBorderStyle(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconBorderStyleFilled.IconBorderStyleFilled, _IconBorderStyleOutlined.IconBorderStyleOutlined, _IconBorderStyleRounded.IconBorderStyleRounded, _IconBorderStyleSharp.IconBorderStyleSharp, _IconBorderStyleTwoTone.IconBorderStyleTwoTone);
};

exports.IconBorderStyle = IconBorderStyle;