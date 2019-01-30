"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBugReport = require("./FilledBugReport");

var _OutlineBugReport = require("./OutlineBugReport");

var _RoundBugReport = require("./RoundBugReport");

var _SharpBugReport = require("./SharpBugReport");

var _TwoToneBugReport = require("./TwoToneBugReport");

var BugReport =
/*#__PURE__*/
function BugReport(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBugReport.FilledBugReport, _OutlineBugReport.OutlineBugReport, _RoundBugReport.RoundBugReport, _SharpBugReport.SharpBugReport, _TwoToneBugReport.TwoToneBugReport);
};

exports.BugReport = BugReport;