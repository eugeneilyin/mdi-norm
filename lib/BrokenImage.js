"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBrokenImage = require("./FilledBrokenImage");

var _OutlineBrokenImage = require("./OutlineBrokenImage");

var _RoundBrokenImage = require("./RoundBrokenImage");

var _SharpBrokenImage = require("./SharpBrokenImage");

var _TwoToneBrokenImage = require("./TwoToneBrokenImage");

var BrokenImage =
/*#__PURE__*/
function BrokenImage(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBrokenImage.FilledBrokenImage, _OutlineBrokenImage.OutlineBrokenImage, _RoundBrokenImage.RoundBrokenImage, _SharpBrokenImage.SharpBrokenImage, _TwoToneBrokenImage.TwoToneBrokenImage);
};

exports.BrokenImage = BrokenImage;