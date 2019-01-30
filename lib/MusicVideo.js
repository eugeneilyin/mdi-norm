"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledMusicVideo = require("./FilledMusicVideo");

var _OutlineMusicVideo = require("./OutlineMusicVideo");

var _RoundMusicVideo = require("./RoundMusicVideo");

var _SharpMusicVideo = require("./SharpMusicVideo");

var _TwoToneMusicVideo = require("./TwoToneMusicVideo");

var MusicVideo =
/*#__PURE__*/
function MusicVideo(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledMusicVideo.FilledMusicVideo, _OutlineMusicVideo.OutlineMusicVideo, _RoundMusicVideo.RoundMusicVideo, _SharpMusicVideo.SharpMusicVideo, _TwoToneMusicVideo.TwoToneMusicVideo);
};

exports.MusicVideo = MusicVideo;