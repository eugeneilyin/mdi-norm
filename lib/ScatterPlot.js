"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledScatterPlot = require("./FilledScatterPlot");

var _OutlineScatterPlot = require("./OutlineScatterPlot");

var _RoundScatterPlot = require("./RoundScatterPlot");

var _SharpScatterPlot = require("./SharpScatterPlot");

var _TwoToneScatterPlot = require("./TwoToneScatterPlot");

var ScatterPlot =
/*#__PURE__*/
function ScatterPlot(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledScatterPlot.FilledScatterPlot, _OutlineScatterPlot.OutlineScatterPlot, _RoundScatterPlot.RoundScatterPlot, _SharpScatterPlot.SharpScatterPlot, _TwoToneScatterPlot.TwoToneScatterPlot);
};

exports.ScatterPlot = ScatterPlot;