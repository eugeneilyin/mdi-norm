"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconOpacityFilled = require("./IconOpacityFilled");

var _IconOpacityOutlined = require("./IconOpacityOutlined");

var _IconOpacityRounded = require("./IconOpacityRounded");

var _IconOpacitySharp = require("./IconOpacitySharp");

var _IconOpacityTwoTone = require("./IconOpacityTwoTone");

var IconOpacity =
/*#__PURE__*/
function IconOpacity(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconOpacityFilled.IconOpacityFilled, _IconOpacityOutlined.IconOpacityOutlined, _IconOpacityRounded.IconOpacityRounded, _IconOpacitySharp.IconOpacitySharp, _IconOpacityTwoTone.IconOpacityTwoTone);
};

exports.IconOpacity = IconOpacity;