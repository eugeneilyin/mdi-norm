"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSchool = require("./FilledSchool");

var _OutlineSchool = require("./OutlineSchool");

var _RoundSchool = require("./RoundSchool");

var _SharpSchool = require("./SharpSchool");

var _TwoToneSchool = require("./TwoToneSchool");

var School =
/*#__PURE__*/
function School(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSchool.FilledSchool, _OutlineSchool.OutlineSchool, _RoundSchool.RoundSchool, _SharpSchool.SharpSchool, _TwoToneSchool.TwoToneSchool);
};

exports.School = School;