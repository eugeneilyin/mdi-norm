"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDashboard = require("./FilledDashboard");

var _OutlineDashboard = require("./OutlineDashboard");

var _RoundDashboard = require("./RoundDashboard");

var _SharpDashboard = require("./SharpDashboard");

var _TwoToneDashboard = require("./TwoToneDashboard");

var Dashboard =
/*#__PURE__*/
function Dashboard(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDashboard.FilledDashboard, _OutlineDashboard.OutlineDashboard, _RoundDashboard.RoundDashboard, _SharpDashboard.SharpDashboard, _TwoToneDashboard.TwoToneDashboard);
};

exports.Dashboard = Dashboard;