"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledGif = require("./FilledGif");

var _OutlineGif = require("./OutlineGif");

var _RoundGif = require("./RoundGif");

var _SharpGif = require("./SharpGif");

var _TwoToneGif = require("./TwoToneGif");

var Gif =
/*#__PURE__*/
function Gif(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledGif.FilledGif, _OutlineGif.OutlineGif, _RoundGif.RoundGif, _SharpGif.SharpGif, _TwoToneGif.TwoToneGif);
};

exports.Gif = Gif;