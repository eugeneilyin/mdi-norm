"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPermMedia = require("./FilledPermMedia");

var _OutlinePermMedia = require("./OutlinePermMedia");

var _RoundPermMedia = require("./RoundPermMedia");

var _SharpPermMedia = require("./SharpPermMedia");

var _TwoTonePermMedia = require("./TwoTonePermMedia");

var PermMedia =
/*#__PURE__*/
function PermMedia(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPermMedia.FilledPermMedia, _OutlinePermMedia.OutlinePermMedia, _RoundPermMedia.RoundPermMedia, _SharpPermMedia.SharpPermMedia, _TwoTonePermMedia.TwoTonePermMedia);
};

exports.PermMedia = PermMedia;