"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledStarRate = require("./FilledStarRate");

var _OutlineStarRate = require("./OutlineStarRate");

var _RoundStarRate = require("./RoundStarRate");

var _SharpStarRate = require("./SharpStarRate");

var _TwoToneStarRate = require("./TwoToneStarRate");

var StarRate =
/*#__PURE__*/
function StarRate(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledStarRate.FilledStarRate, _OutlineStarRate.OutlineStarRate, _RoundStarRate.RoundStarRate, _SharpStarRate.SharpStarRate, _TwoToneStarRate.TwoToneStarRate);
};

exports.StarRate = StarRate;