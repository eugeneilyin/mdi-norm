"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPlayArrow = require("./FilledPlayArrow");

var _OutlinePlayArrow = require("./OutlinePlayArrow");

var _RoundPlayArrow = require("./RoundPlayArrow");

var _SharpPlayArrow = require("./SharpPlayArrow");

var _TwoTonePlayArrow = require("./TwoTonePlayArrow");

var PlayArrow =
/*#__PURE__*/
function PlayArrow(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPlayArrow.FilledPlayArrow, _OutlinePlayArrow.OutlinePlayArrow, _RoundPlayArrow.RoundPlayArrow, _SharpPlayArrow.SharpPlayArrow, _TwoTonePlayArrow.TwoTonePlayArrow);
};

exports.PlayArrow = PlayArrow;