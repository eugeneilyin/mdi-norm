"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconBrushFilled = require("./IconBrushFilled");

var _IconBrushOutlined = require("./IconBrushOutlined");

var _IconBrushRounded = require("./IconBrushRounded");

var _IconBrushSharp = require("./IconBrushSharp");

var _IconBrushTwoTone = require("./IconBrushTwoTone");

var IconBrush =
/*#__PURE__*/
function IconBrush(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconBrushFilled.IconBrushFilled, _IconBrushOutlined.IconBrushOutlined, _IconBrushRounded.IconBrushRounded, _IconBrushSharp.IconBrushSharp, _IconBrushTwoTone.IconBrushTwoTone);
};

exports.IconBrush = IconBrush;