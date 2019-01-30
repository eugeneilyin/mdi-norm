"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledArtTrack = require("./FilledArtTrack");

var _OutlineArtTrack = require("./OutlineArtTrack");

var _RoundArtTrack = require("./RoundArtTrack");

var _SharpArtTrack = require("./SharpArtTrack");

var _TwoToneArtTrack = require("./TwoToneArtTrack");

var ArtTrack =
/*#__PURE__*/
function ArtTrack(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledArtTrack.FilledArtTrack, _OutlineArtTrack.OutlineArtTrack, _RoundArtTrack.RoundArtTrack, _SharpArtTrack.SharpArtTrack, _TwoToneArtTrack.TwoToneArtTrack);
};

exports.ArtTrack = ArtTrack;