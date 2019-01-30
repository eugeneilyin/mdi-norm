"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFavorite = require("./FilledFavorite");

var _OutlineFavorite = require("./OutlineFavorite");

var _RoundFavorite = require("./RoundFavorite");

var _SharpFavorite = require("./SharpFavorite");

var _TwoToneFavorite = require("./TwoToneFavorite");

var Favorite =
/*#__PURE__*/
function Favorite(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFavorite.FilledFavorite, _OutlineFavorite.OutlineFavorite, _RoundFavorite.RoundFavorite, _SharpFavorite.SharpFavorite, _TwoToneFavorite.TwoToneFavorite);
};

exports.Favorite = Favorite;