"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFavoriteBorder = require("./FilledFavoriteBorder");

var _OutlineFavoriteBorder = require("./OutlineFavoriteBorder");

var _RoundFavoriteBorder = require("./RoundFavoriteBorder");

var _SharpFavoriteBorder = require("./SharpFavoriteBorder");

var _TwoToneFavoriteBorder = require("./TwoToneFavoriteBorder");

var FavoriteBorder =
/*#__PURE__*/
function FavoriteBorder(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFavoriteBorder.FilledFavoriteBorder, _OutlineFavoriteBorder.OutlineFavoriteBorder, _RoundFavoriteBorder.RoundFavoriteBorder, _SharpFavoriteBorder.SharpFavoriteBorder, _TwoToneFavoriteBorder.TwoToneFavoriteBorder);
};

exports.FavoriteBorder = FavoriteBorder;