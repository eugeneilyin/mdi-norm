"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconGradeFilled = require("./IconGradeFilled");

var _IconGradeOutlined = require("./IconGradeOutlined");

var _IconGradeRounded = require("./IconGradeRounded");

var _IconGradeSharp = require("./IconGradeSharp");

var _IconGradeTwoTone = require("./IconGradeTwoTone");

var IconGrade =
/*#__PURE__*/
function IconGrade(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconGradeFilled.IconGradeFilled, _IconGradeOutlined.IconGradeOutlined, _IconGradeRounded.IconGradeRounded, _IconGradeSharp.IconGradeSharp, _IconGradeTwoTone.IconGradeTwoTone);
};

exports.IconGrade = IconGrade;