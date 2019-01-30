"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledGames = require("./FilledGames");

var _OutlineGames = require("./OutlineGames");

var _RoundGames = require("./RoundGames");

var _SharpGames = require("./SharpGames");

var _TwoToneGames = require("./TwoToneGames");

var Games =
/*#__PURE__*/
function Games(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledGames.FilledGames, _OutlineGames.OutlineGames, _RoundGames.RoundGames, _SharpGames.SharpGames, _TwoToneGames.TwoToneGames);
};

exports.Games = Games;