"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFilter = require("./FilledFilter");

var _OutlineFilter = require("./OutlineFilter");

var _RoundFilter = require("./RoundFilter");

var _SharpFilter = require("./SharpFilter");

var _TwoToneFilter = require("./TwoToneFilter");

var Filter =
/*#__PURE__*/
function Filter(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFilter.FilledFilter, _OutlineFilter.OutlineFilter, _RoundFilter.RoundFilter, _SharpFilter.SharpFilter, _TwoToneFilter.TwoToneFilter);
};

exports.Filter = Filter;