"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledReportProblem = require("./FilledReportProblem");

var _OutlineReportProblem = require("./OutlineReportProblem");

var _RoundReportProblem = require("./RoundReportProblem");

var _SharpReportProblem = require("./SharpReportProblem");

var _TwoToneReportProblem = require("./TwoToneReportProblem");

var ReportProblem =
/*#__PURE__*/
function ReportProblem(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledReportProblem.FilledReportProblem, _OutlineReportProblem.OutlineReportProblem, _RoundReportProblem.RoundReportProblem, _SharpReportProblem.SharpReportProblem, _TwoToneReportProblem.TwoToneReportProblem);
};

exports.ReportProblem = ReportProblem;