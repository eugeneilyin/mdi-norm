"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconColorLensFilled = require("./IconColorLensFilled");

var _IconColorLensOutlined = require("./IconColorLensOutlined");

var _IconColorLensRounded = require("./IconColorLensRounded");

var _IconColorLensSharp = require("./IconColorLensSharp");

var _IconColorLensTwoTone = require("./IconColorLensTwoTone");

var IconColorLens =
/*#__PURE__*/
function IconColorLens(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconColorLensFilled.IconColorLensFilled, _IconColorLensOutlined.IconColorLensOutlined, _IconColorLensRounded.IconColorLensRounded, _IconColorLensSharp.IconColorLensSharp, _IconColorLensTwoTone.IconColorLensTwoTone);
};

exports.IconColorLens = IconColorLens;