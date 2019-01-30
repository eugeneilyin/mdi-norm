"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledScore = require("./FilledScore");

var _OutlineScore = require("./OutlineScore");

var _RoundScore = require("./RoundScore");

var _SharpScore = require("./SharpScore");

var _TwoToneScore = require("./TwoToneScore");

var Score =
/*#__PURE__*/
function Score(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledScore.FilledScore, _OutlineScore.OutlineScore, _RoundScore.RoundScore, _SharpScore.SharpScore, _TwoToneScore.TwoToneScore);
};

exports.Score = Score;