"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconWallpaperFilled = require("./IconWallpaperFilled");

var _IconWallpaperOutlined = require("./IconWallpaperOutlined");

var _IconWallpaperRounded = require("./IconWallpaperRounded");

var _IconWallpaperSharp = require("./IconWallpaperSharp");

var _IconWallpaperTwoTone = require("./IconWallpaperTwoTone");

var IconWallpaper =
/*#__PURE__*/
function IconWallpaper(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconWallpaperFilled.IconWallpaperFilled, _IconWallpaperOutlined.IconWallpaperOutlined, _IconWallpaperRounded.IconWallpaperRounded, _IconWallpaperSharp.IconWallpaperSharp, _IconWallpaperTwoTone.IconWallpaperTwoTone);
};

exports.IconWallpaper = IconWallpaper;