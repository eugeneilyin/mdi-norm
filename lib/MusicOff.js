"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledMusicOff = require("./FilledMusicOff");

var _OutlineMusicOff = require("./OutlineMusicOff");

var _RoundMusicOff = require("./RoundMusicOff");

var _SharpMusicOff = require("./SharpMusicOff");

var _TwoToneMusicOff = require("./TwoToneMusicOff");

var MusicOff =
/*#__PURE__*/
function MusicOff(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledMusicOff.FilledMusicOff, _OutlineMusicOff.OutlineMusicOff, _RoundMusicOff.RoundMusicOff, _SharpMusicOff.SharpMusicOff, _TwoToneMusicOff.TwoToneMusicOff);
};

exports.MusicOff = MusicOff;