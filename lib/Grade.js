"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledGrade = require("./FilledGrade");

var _OutlineGrade = require("./OutlineGrade");

var _RoundGrade = require("./RoundGrade");

var _SharpGrade = require("./SharpGrade");

var _TwoToneGrade = require("./TwoToneGrade");

var Grade =
/*#__PURE__*/
function Grade(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledGrade.FilledGrade, _OutlineGrade.OutlineGrade, _RoundGrade.RoundGrade, _SharpGrade.SharpGrade, _TwoToneGrade.TwoToneGrade);
};

exports.Grade = Grade;