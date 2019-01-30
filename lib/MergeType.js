"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledMergeType = require("./FilledMergeType");

var _OutlineMergeType = require("./OutlineMergeType");

var _RoundMergeType = require("./RoundMergeType");

var _SharpMergeType = require("./SharpMergeType");

var _TwoToneMergeType = require("./TwoToneMergeType");

var MergeType =
/*#__PURE__*/
function MergeType(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledMergeType.FilledMergeType, _OutlineMergeType.OutlineMergeType, _RoundMergeType.RoundMergeType, _SharpMergeType.SharpMergeType, _TwoToneMergeType.TwoToneMergeType);
};

exports.MergeType = MergeType;