"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPlaylistAddCheck = require("./FilledPlaylistAddCheck");

var _OutlinePlaylistAddCheck = require("./OutlinePlaylistAddCheck");

var _RoundPlaylistAddCheck = require("./RoundPlaylistAddCheck");

var _SharpPlaylistAddCheck = require("./SharpPlaylistAddCheck");

var _TwoTonePlaylistAddCheck = require("./TwoTonePlaylistAddCheck");

var PlaylistAddCheck =
/*#__PURE__*/
function PlaylistAddCheck(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPlaylistAddCheck.FilledPlaylistAddCheck, _OutlinePlaylistAddCheck.OutlinePlaylistAddCheck, _RoundPlaylistAddCheck.RoundPlaylistAddCheck, _SharpPlaylistAddCheck.SharpPlaylistAddCheck, _TwoTonePlaylistAddCheck.TwoTonePlaylistAddCheck);
};

exports.PlaylistAddCheck = PlaylistAddCheck;