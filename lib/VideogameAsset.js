"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledVideogameAsset = require("./FilledVideogameAsset");

var _OutlineVideogameAsset = require("./OutlineVideogameAsset");

var _RoundVideogameAsset = require("./RoundVideogameAsset");

var _SharpVideogameAsset = require("./SharpVideogameAsset");

var _TwoToneVideogameAsset = require("./TwoToneVideogameAsset");

var VideogameAsset =
/*#__PURE__*/
function VideogameAsset(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledVideogameAsset.FilledVideogameAsset, _OutlineVideogameAsset.OutlineVideogameAsset, _RoundVideogameAsset.RoundVideogameAsset, _SharpVideogameAsset.SharpVideogameAsset, _TwoToneVideogameAsset.TwoToneVideogameAsset);
};

exports.VideogameAsset = VideogameAsset;