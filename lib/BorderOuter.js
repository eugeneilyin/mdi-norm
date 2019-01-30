"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBorderOuter = require("./FilledBorderOuter");

var _OutlineBorderOuter = require("./OutlineBorderOuter");

var _RoundBorderOuter = require("./RoundBorderOuter");

var _SharpBorderOuter = require("./SharpBorderOuter");

var _TwoToneBorderOuter = require("./TwoToneBorderOuter");

var BorderOuter =
/*#__PURE__*/
function BorderOuter(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBorderOuter.FilledBorderOuter, _OutlineBorderOuter.OutlineBorderOuter, _RoundBorderOuter.RoundBorderOuter, _SharpBorderOuter.SharpBorderOuter, _TwoToneBorderOuter.TwoToneBorderOuter);
};

exports.BorderOuter = BorderOuter;