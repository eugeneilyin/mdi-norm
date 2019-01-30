"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBorderClear = require("./FilledBorderClear");

var _OutlineBorderClear = require("./OutlineBorderClear");

var _RoundBorderClear = require("./RoundBorderClear");

var _SharpBorderClear = require("./SharpBorderClear");

var _TwoToneBorderClear = require("./TwoToneBorderClear");

var BorderClear =
/*#__PURE__*/
function BorderClear(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBorderClear.FilledBorderClear, _OutlineBorderClear.OutlineBorderClear, _RoundBorderClear.RoundBorderClear, _SharpBorderClear.SharpBorderClear, _TwoToneBorderClear.TwoToneBorderClear);
};

exports.BorderClear = BorderClear;