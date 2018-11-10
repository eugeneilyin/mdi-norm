"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconTextFormatFilled = require("./IconTextFormatFilled");

var _IconTextFormatOutlined = require("./IconTextFormatOutlined");

var _IconTextFormatRounded = require("./IconTextFormatRounded");

var _IconTextFormatSharp = require("./IconTextFormatSharp");

var _IconTextFormatTwoTone = require("./IconTextFormatTwoTone");

var IconTextFormat =
/*#__PURE__*/
function IconTextFormat(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconTextFormatFilled.IconTextFormatFilled, _IconTextFormatOutlined.IconTextFormatOutlined, _IconTextFormatRounded.IconTextFormatRounded, _IconTextFormatSharp.IconTextFormatSharp, _IconTextFormatTwoTone.IconTextFormatTwoTone);
};

exports.IconTextFormat = IconTextFormat;