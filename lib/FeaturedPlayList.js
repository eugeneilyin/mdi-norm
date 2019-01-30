"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFeaturedPlayList = require("./FilledFeaturedPlayList");

var _OutlineFeaturedPlayList = require("./OutlineFeaturedPlayList");

var _RoundFeaturedPlayList = require("./RoundFeaturedPlayList");

var _SharpFeaturedPlayList = require("./SharpFeaturedPlayList");

var _TwoToneFeaturedPlayList = require("./TwoToneFeaturedPlayList");

var FeaturedPlayList =
/*#__PURE__*/
function FeaturedPlayList(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFeaturedPlayList.FilledFeaturedPlayList, _OutlineFeaturedPlayList.OutlineFeaturedPlayList, _RoundFeaturedPlayList.RoundFeaturedPlayList, _SharpFeaturedPlayList.SharpFeaturedPlayList, _TwoToneFeaturedPlayList.TwoToneFeaturedPlayList);
};

exports.FeaturedPlayList = FeaturedPlayList;