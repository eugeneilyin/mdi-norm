"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBorderInner = require("./FilledBorderInner");

var _OutlineBorderInner = require("./OutlineBorderInner");

var _RoundBorderInner = require("./RoundBorderInner");

var _SharpBorderInner = require("./SharpBorderInner");

var _TwoToneBorderInner = require("./TwoToneBorderInner");

var BorderInner =
/*#__PURE__*/
function BorderInner(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBorderInner.FilledBorderInner, _OutlineBorderInner.OutlineBorderInner, _RoundBorderInner.RoundBorderInner, _SharpBorderInner.SharpBorderInner, _TwoToneBorderInner.TwoToneBorderInner);
};

exports.BorderInner = BorderInner;