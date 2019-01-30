"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBarChart = require("./FilledBarChart");

var _OutlineBarChart = require("./OutlineBarChart");

var _RoundBarChart = require("./RoundBarChart");

var _SharpBarChart = require("./SharpBarChart");

var _TwoToneBarChart = require("./TwoToneBarChart");

var BarChart =
/*#__PURE__*/
function BarChart(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBarChart.FilledBarChart, _OutlineBarChart.OutlineBarChart, _RoundBarChart.RoundBarChart, _SharpBarChart.SharpBarChart, _TwoToneBarChart.TwoToneBarChart);
};

exports.BarChart = BarChart;