"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLineWeight = require("./FilledLineWeight");

var _OutlineLineWeight = require("./OutlineLineWeight");

var _RoundLineWeight = require("./RoundLineWeight");

var _SharpLineWeight = require("./SharpLineWeight");

var _TwoToneLineWeight = require("./TwoToneLineWeight");

var LineWeight =
/*#__PURE__*/
function LineWeight(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLineWeight.FilledLineWeight, _OutlineLineWeight.OutlineLineWeight, _RoundLineWeight.RoundLineWeight, _SharpLineWeight.SharpLineWeight, _TwoToneLineWeight.TwoToneLineWeight);
};

exports.LineWeight = LineWeight;