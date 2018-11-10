"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconBarChartFilled = require("./IconBarChartFilled");

var _IconBarChartOutlined = require("./IconBarChartOutlined");

var _IconBarChartRounded = require("./IconBarChartRounded");

var _IconBarChartSharp = require("./IconBarChartSharp");

var _IconBarChartTwoTone = require("./IconBarChartTwoTone");

var IconBarChart =
/*#__PURE__*/
function IconBarChart(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconBarChartFilled.IconBarChartFilled, _IconBarChartOutlined.IconBarChartOutlined, _IconBarChartRounded.IconBarChartRounded, _IconBarChartSharp.IconBarChartSharp, _IconBarChartTwoTone.IconBarChartTwoTone);
};

exports.IconBarChart = IconBarChart;