"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDateRange = require("./FilledDateRange");

var _OutlineDateRange = require("./OutlineDateRange");

var _RoundDateRange = require("./RoundDateRange");

var _SharpDateRange = require("./SharpDateRange");

var _TwoToneDateRange = require("./TwoToneDateRange");

var DateRange =
/*#__PURE__*/
function DateRange(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDateRange.FilledDateRange, _OutlineDateRange.OutlineDateRange, _RoundDateRange.RoundDateRange, _SharpDateRange.SharpDateRange, _TwoToneDateRange.TwoToneDateRange);
};

exports.DateRange = DateRange;