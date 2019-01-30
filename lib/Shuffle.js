"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledShuffle = require("./FilledShuffle");

var _OutlineShuffle = require("./OutlineShuffle");

var _RoundShuffle = require("./RoundShuffle");

var _SharpShuffle = require("./SharpShuffle");

var _TwoToneShuffle = require("./TwoToneShuffle");

var Shuffle =
/*#__PURE__*/
function Shuffle(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledShuffle.FilledShuffle, _OutlineShuffle.OutlineShuffle, _RoundShuffle.RoundShuffle, _SharpShuffle.SharpShuffle, _TwoToneShuffle.TwoToneShuffle);
};

exports.Shuffle = Shuffle;