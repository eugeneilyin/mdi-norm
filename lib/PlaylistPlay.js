"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPlaylistPlay = require("./FilledPlaylistPlay");

var _OutlinePlaylistPlay = require("./OutlinePlaylistPlay");

var _RoundPlaylistPlay = require("./RoundPlaylistPlay");

var _SharpPlaylistPlay = require("./SharpPlaylistPlay");

var _TwoTonePlaylistPlay = require("./TwoTonePlaylistPlay");

var PlaylistPlay =
/*#__PURE__*/
function PlaylistPlay(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPlaylistPlay.FilledPlaylistPlay, _OutlinePlaylistPlay.OutlinePlaylistPlay, _RoundPlaylistPlay.RoundPlaylistPlay, _SharpPlaylistPlay.SharpPlaylistPlay, _TwoTonePlaylistPlay.TwoTonePlaylistPlay);
};

exports.PlaylistPlay = PlaylistPlay;