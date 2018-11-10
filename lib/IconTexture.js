"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconTextureFilled = require("./IconTextureFilled");

var _IconTextureOutlined = require("./IconTextureOutlined");

var _IconTextureRounded = require("./IconTextureRounded");

var _IconTextureSharp = require("./IconTextureSharp");

var _IconTextureTwoTone = require("./IconTextureTwoTone");

var IconTexture =
/*#__PURE__*/
function IconTexture(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconTextureFilled.IconTextureFilled, _IconTextureOutlined.IconTextureOutlined, _IconTextureRounded.IconTextureRounded, _IconTextureSharp.IconTextureSharp, _IconTextureTwoTone.IconTextureTwoTone);
};

exports.IconTexture = IconTexture;