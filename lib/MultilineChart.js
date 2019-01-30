"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledMultilineChart = require("./FilledMultilineChart");

var _OutlineMultilineChart = require("./OutlineMultilineChart");

var _RoundMultilineChart = require("./RoundMultilineChart");

var _SharpMultilineChart = require("./SharpMultilineChart");

var _TwoToneMultilineChart = require("./TwoToneMultilineChart");

var MultilineChart =
/*#__PURE__*/
function MultilineChart(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledMultilineChart.FilledMultilineChart, _OutlineMultilineChart.OutlineMultilineChart, _RoundMultilineChart.RoundMultilineChart, _SharpMultilineChart.SharpMultilineChart, _TwoToneMultilineChart.TwoToneMultilineChart);
};

exports.MultilineChart = MultilineChart;