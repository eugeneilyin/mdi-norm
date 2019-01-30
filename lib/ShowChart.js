"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledShowChart = require("./FilledShowChart");

var _OutlineShowChart = require("./OutlineShowChart");

var _RoundShowChart = require("./RoundShowChart");

var _SharpShowChart = require("./SharpShowChart");

var _TwoToneShowChart = require("./TwoToneShowChart");

var ShowChart =
/*#__PURE__*/
function ShowChart(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledShowChart.FilledShowChart, _OutlineShowChart.OutlineShowChart, _RoundShowChart.RoundShowChart, _SharpShowChart.SharpShowChart, _TwoToneShowChart.TwoToneShowChart);
};

exports.ShowChart = ShowChart;