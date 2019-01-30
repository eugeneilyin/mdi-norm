"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledStar = require("./FilledStar");

var _OutlineStar = require("./OutlineStar");

var _RoundStar = require("./RoundStar");

var _SharpStar = require("./SharpStar");

var _TwoToneStar = require("./TwoToneStar");

var Star =
/*#__PURE__*/
function Star(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledStar.FilledStar, _OutlineStar.OutlineStar, _RoundStar.RoundStar, _SharpStar.SharpStar, _TwoToneStar.TwoToneStar);
};

exports.Star = Star;