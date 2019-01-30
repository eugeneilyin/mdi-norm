"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledImage = require("./FilledImage");

var _OutlineImage = require("./OutlineImage");

var _RoundImage = require("./RoundImage");

var _SharpImage = require("./SharpImage");

var _TwoToneImage = require("./TwoToneImage");

var Image =
/*#__PURE__*/
function Image(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledImage.FilledImage, _OutlineImage.OutlineImage, _RoundImage.RoundImage, _SharpImage.SharpImage, _TwoToneImage.TwoToneImage);
};

exports.Image = Image;