"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledViewWeek = require("./FilledViewWeek");

var _OutlineViewWeek = require("./OutlineViewWeek");

var _RoundViewWeek = require("./RoundViewWeek");

var _SharpViewWeek = require("./SharpViewWeek");

var _TwoToneViewWeek = require("./TwoToneViewWeek");

var ViewWeek =
/*#__PURE__*/
function ViewWeek(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledViewWeek.FilledViewWeek, _OutlineViewWeek.OutlineViewWeek, _RoundViewWeek.RoundViewWeek, _SharpViewWeek.SharpViewWeek, _TwoToneViewWeek.TwoToneViewWeek);
};

exports.ViewWeek = ViewWeek;