"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFlip = require("./FilledFlip");

var _OutlineFlip = require("./OutlineFlip");

var _RoundFlip = require("./RoundFlip");

var _SharpFlip = require("./SharpFlip");

var _TwoToneFlip = require("./TwoToneFlip");

var Flip =
/*#__PURE__*/
function Flip(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFlip.FilledFlip, _OutlineFlip.OutlineFlip, _RoundFlip.RoundFlip, _SharpFlip.SharpFlip, _TwoToneFlip.TwoToneFlip);
};

exports.Flip = Flip;