"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAssessment = require("./FilledAssessment");

var _OutlineAssessment = require("./OutlineAssessment");

var _RoundAssessment = require("./RoundAssessment");

var _SharpAssessment = require("./SharpAssessment");

var _TwoToneAssessment = require("./TwoToneAssessment");

var Assessment =
/*#__PURE__*/
function Assessment(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAssessment.FilledAssessment, _OutlineAssessment.OutlineAssessment, _RoundAssessment.RoundAssessment, _SharpAssessment.SharpAssessment, _TwoToneAssessment.TwoToneAssessment);
};

exports.Assessment = Assessment;