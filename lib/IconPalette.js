"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconPaletteFilled = require("./IconPaletteFilled");

var _IconPaletteOutlined = require("./IconPaletteOutlined");

var _IconPaletteRounded = require("./IconPaletteRounded");

var _IconPaletteSharp = require("./IconPaletteSharp");

var _IconPaletteTwoTone = require("./IconPaletteTwoTone");

var IconPalette =
/*#__PURE__*/
function IconPalette(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconPaletteFilled.IconPaletteFilled, _IconPaletteOutlined.IconPaletteOutlined, _IconPaletteRounded.IconPaletteRounded, _IconPaletteSharp.IconPaletteSharp, _IconPaletteTwoTone.IconPaletteTwoTone);
};

exports.IconPalette = IconPalette;