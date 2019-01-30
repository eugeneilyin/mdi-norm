"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledThumbsUpDown = require("./FilledThumbsUpDown");

var _OutlineThumbsUpDown = require("./OutlineThumbsUpDown");

var _RoundThumbsUpDown = require("./RoundThumbsUpDown");

var _SharpThumbsUpDown = require("./SharpThumbsUpDown");

var _TwoToneThumbsUpDown = require("./TwoToneThumbsUpDown");

var ThumbsUpDown =
/*#__PURE__*/
function ThumbsUpDown(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledThumbsUpDown.FilledThumbsUpDown, _OutlineThumbsUpDown.OutlineThumbsUpDown, _RoundThumbsUpDown.RoundThumbsUpDown, _SharpThumbsUpDown.SharpThumbsUpDown, _TwoToneThumbsUpDown.TwoToneThumbsUpDown);
};

exports.ThumbsUpDown = ThumbsUpDown;