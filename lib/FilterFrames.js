"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFilterFrames = require("./FilledFilterFrames");

var _OutlineFilterFrames = require("./OutlineFilterFrames");

var _RoundFilterFrames = require("./RoundFilterFrames");

var _SharpFilterFrames = require("./SharpFilterFrames");

var _TwoToneFilterFrames = require("./TwoToneFilterFrames");

var FilterFrames =
/*#__PURE__*/
function FilterFrames(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFilterFrames.FilledFilterFrames, _OutlineFilterFrames.OutlineFilterFrames, _RoundFilterFrames.RoundFilterFrames, _SharpFilterFrames.SharpFilterFrames, _TwoToneFilterFrames.TwoToneFilterFrames);
};

exports.FilterFrames = FilterFrames;