"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledReport = require("./FilledReport");

var _OutlineReport = require("./OutlineReport");

var _RoundReport = require("./RoundReport");

var _SharpReport = require("./SharpReport");

var _TwoToneReport = require("./TwoToneReport");

var Report =
/*#__PURE__*/
function Report(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledReport.FilledReport, _OutlineReport.OutlineReport, _RoundReport.RoundReport, _SharpReport.SharpReport, _TwoToneReport.TwoToneReport);
};

exports.Report = Report;