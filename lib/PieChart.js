"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPieChart = require("./FilledPieChart");

var _OutlinePieChart = require("./OutlinePieChart");

var _RoundPieChart = require("./RoundPieChart");

var _SharpPieChart = require("./SharpPieChart");

var _TwoTonePieChart = require("./TwoTonePieChart");

var PieChart =
/*#__PURE__*/
function PieChart(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPieChart.FilledPieChart, _OutlinePieChart.OutlinePieChart, _RoundPieChart.RoundPieChart, _SharpPieChart.SharpPieChart, _TwoTonePieChart.TwoTonePieChart);
};

exports.PieChart = PieChart;