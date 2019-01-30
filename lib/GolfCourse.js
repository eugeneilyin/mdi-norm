"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledGolfCourse = require("./FilledGolfCourse");

var _OutlineGolfCourse = require("./OutlineGolfCourse");

var _RoundGolfCourse = require("./RoundGolfCourse");

var _SharpGolfCourse = require("./SharpGolfCourse");

var _TwoToneGolfCourse = require("./TwoToneGolfCourse");

var GolfCourse =
/*#__PURE__*/
function GolfCourse(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledGolfCourse.FilledGolfCourse, _OutlineGolfCourse.OutlineGolfCourse, _RoundGolfCourse.RoundGolfCourse, _SharpGolfCourse.SharpGolfCourse, _TwoToneGolfCourse.TwoToneGolfCourse);
};

exports.GolfCourse = GolfCourse;