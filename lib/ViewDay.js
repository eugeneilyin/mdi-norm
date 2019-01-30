"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledViewDay = require("./FilledViewDay");

var _OutlineViewDay = require("./OutlineViewDay");

var _RoundViewDay = require("./RoundViewDay");

var _SharpViewDay = require("./SharpViewDay");

var _TwoToneViewDay = require("./TwoToneViewDay");

var ViewDay =
/*#__PURE__*/
function ViewDay(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledViewDay.FilledViewDay, _OutlineViewDay.OutlineViewDay, _RoundViewDay.RoundViewDay, _SharpViewDay.SharpViewDay, _TwoToneViewDay.TwoToneViewDay);
};

exports.ViewDay = ViewDay;