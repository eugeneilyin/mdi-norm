"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledWallpaper = require("./FilledWallpaper");

var _OutlineWallpaper = require("./OutlineWallpaper");

var _RoundWallpaper = require("./RoundWallpaper");

var _SharpWallpaper = require("./SharpWallpaper");

var _TwoToneWallpaper = require("./TwoToneWallpaper");

var Wallpaper =
/*#__PURE__*/
function Wallpaper(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledWallpaper.FilledWallpaper, _OutlineWallpaper.OutlineWallpaper, _RoundWallpaper.RoundWallpaper, _SharpWallpaper.SharpWallpaper, _TwoToneWallpaper.TwoToneWallpaper);
};

exports.Wallpaper = Wallpaper;