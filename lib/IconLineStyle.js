"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconLineStyleFilled = require("./IconLineStyleFilled");

var _IconLineStyleOutlined = require("./IconLineStyleOutlined");

var _IconLineStyleRounded = require("./IconLineStyleRounded");

var _IconLineStyleSharp = require("./IconLineStyleSharp");

var _IconLineStyleTwoTone = require("./IconLineStyleTwoTone");

var IconLineStyle =
/*#__PURE__*/
function IconLineStyle(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconLineStyleFilled.IconLineStyleFilled, _IconLineStyleOutlined.IconLineStyleOutlined, _IconLineStyleRounded.IconLineStyleRounded, _IconLineStyleSharp.IconLineStyleSharp, _IconLineStyleTwoTone.IconLineStyleTwoTone);
};

exports.IconLineStyle = IconLineStyle;