"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconStyleFilled = require("./IconStyleFilled");

var _IconStyleOutlined = require("./IconStyleOutlined");

var _IconStyleRounded = require("./IconStyleRounded");

var _IconStyleSharp = require("./IconStyleSharp");

var _IconStyleTwoTone = require("./IconStyleTwoTone");

var IconStyle =
/*#__PURE__*/
function IconStyle(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconStyleFilled.IconStyleFilled, _IconStyleOutlined.IconStyleOutlined, _IconStyleRounded.IconStyleRounded, _IconStyleSharp.IconStyleSharp, _IconStyleTwoTone.IconStyleTwoTone);
};

exports.IconStyle = IconStyle;