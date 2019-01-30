"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSubtitles = require("./FilledSubtitles");

var _OutlineSubtitles = require("./OutlineSubtitles");

var _RoundSubtitles = require("./RoundSubtitles");

var _SharpSubtitles = require("./SharpSubtitles");

var _TwoToneSubtitles = require("./TwoToneSubtitles");

var Subtitles =
/*#__PURE__*/
function Subtitles(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSubtitles.FilledSubtitles, _OutlineSubtitles.OutlineSubtitles, _RoundSubtitles.RoundSubtitles, _SharpSubtitles.SharpSubtitles, _TwoToneSubtitles.TwoToneSubtitles);
};

exports.Subtitles = Subtitles;