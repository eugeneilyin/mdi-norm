"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledImageAspectRatio = require("./FilledImageAspectRatio");

var _OutlineImageAspectRatio = require("./OutlineImageAspectRatio");

var _RoundImageAspectRatio = require("./RoundImageAspectRatio");

var _SharpImageAspectRatio = require("./SharpImageAspectRatio");

var _TwoToneImageAspectRatio = require("./TwoToneImageAspectRatio");

var ImageAspectRatio =
/*#__PURE__*/
function ImageAspectRatio(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledImageAspectRatio.FilledImageAspectRatio, _OutlineImageAspectRatio.OutlineImageAspectRatio, _RoundImageAspectRatio.RoundImageAspectRatio, _SharpImageAspectRatio.SharpImageAspectRatio, _TwoToneImageAspectRatio.TwoToneImageAspectRatio);
};

exports.ImageAspectRatio = ImageAspectRatio;