"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBubbleChart = require("./FilledBubbleChart");

var _OutlineBubbleChart = require("./OutlineBubbleChart");

var _RoundBubbleChart = require("./RoundBubbleChart");

var _SharpBubbleChart = require("./SharpBubbleChart");

var _TwoToneBubbleChart = require("./TwoToneBubbleChart");

var BubbleChart =
/*#__PURE__*/
function BubbleChart(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBubbleChart.FilledBubbleChart, _OutlineBubbleChart.OutlineBubbleChart, _RoundBubbleChart.RoundBubbleChart, _SharpBubbleChart.SharpBubbleChart, _TwoToneBubbleChart.TwoToneBubbleChart);
};

exports.BubbleChart = BubbleChart;