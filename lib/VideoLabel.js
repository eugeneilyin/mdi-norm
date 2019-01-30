"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledVideoLabel = require("./FilledVideoLabel");

var _OutlineVideoLabel = require("./OutlineVideoLabel");

var _RoundVideoLabel = require("./RoundVideoLabel");

var _SharpVideoLabel = require("./SharpVideoLabel");

var _TwoToneVideoLabel = require("./TwoToneVideoLabel");

var VideoLabel =
/*#__PURE__*/
function VideoLabel(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledVideoLabel.FilledVideoLabel, _OutlineVideoLabel.OutlineVideoLabel, _RoundVideoLabel.RoundVideoLabel, _SharpVideoLabel.SharpVideoLabel, _TwoToneVideoLabel.TwoToneVideoLabel);
};

exports.VideoLabel = VideoLabel;