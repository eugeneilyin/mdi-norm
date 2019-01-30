"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledTableChart = require("./FilledTableChart");

var _OutlineTableChart = require("./OutlineTableChart");

var _RoundTableChart = require("./RoundTableChart");

var _SharpTableChart = require("./SharpTableChart");

var _TwoToneTableChart = require("./TwoToneTableChart");

var TableChart =
/*#__PURE__*/
function TableChart(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledTableChart.FilledTableChart, _OutlineTableChart.OutlineTableChart, _RoundTableChart.RoundTableChart, _SharpTableChart.SharpTableChart, _TwoToneTableChart.TwoToneTableChart);
};

exports.TableChart = TableChart;