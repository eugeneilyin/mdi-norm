"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconBorderColorFilled = require("./IconBorderColorFilled");

var _IconBorderColorOutlined = require("./IconBorderColorOutlined");

var _IconBorderColorRounded = require("./IconBorderColorRounded");

var _IconBorderColorSharp = require("./IconBorderColorSharp");

var _IconBorderColorTwoTone = require("./IconBorderColorTwoTone");

var IconBorderColor =
/*#__PURE__*/
function IconBorderColor(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconBorderColorFilled.IconBorderColorFilled, _IconBorderColorOutlined.IconBorderColorOutlined, _IconBorderColorRounded.IconBorderColorRounded, _IconBorderColorSharp.IconBorderColorSharp, _IconBorderColorTwoTone.IconBorderColorTwoTone);
};

exports.IconBorderColor = IconBorderColor;