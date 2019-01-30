"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledNearMe = require("./FilledNearMe");

var _OutlineNearMe = require("./OutlineNearMe");

var _RoundNearMe = require("./RoundNearMe");

var _SharpNearMe = require("./SharpNearMe");

var _TwoToneNearMe = require("./TwoToneNearMe");

var NearMe =
/*#__PURE__*/
function NearMe(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledNearMe.FilledNearMe, _OutlineNearMe.OutlineNearMe, _RoundNearMe.RoundNearMe, _SharpNearMe.SharpNearMe, _TwoToneNearMe.TwoToneNearMe);
};

exports.NearMe = NearMe;