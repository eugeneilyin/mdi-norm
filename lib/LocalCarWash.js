"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLocalCarWash = require("./FilledLocalCarWash");

var _OutlineLocalCarWash = require("./OutlineLocalCarWash");

var _RoundLocalCarWash = require("./RoundLocalCarWash");

var _SharpLocalCarWash = require("./SharpLocalCarWash");

var _TwoToneLocalCarWash = require("./TwoToneLocalCarWash");

var LocalCarWash =
/*#__PURE__*/
function LocalCarWash(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLocalCarWash.FilledLocalCarWash, _OutlineLocalCarWash.OutlineLocalCarWash, _RoundLocalCarWash.RoundLocalCarWash, _SharpLocalCarWash.SharpLocalCarWash, _TwoToneLocalCarWash.TwoToneLocalCarWash);
};

exports.LocalCarWash = LocalCarWash;