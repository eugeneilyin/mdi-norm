"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledWorkOutline = require("./FilledWorkOutline");

var _OutlineWorkOutline = require("./OutlineWorkOutline");

var _RoundWorkOutline = require("./RoundWorkOutline");

var _SharpWorkOutline = require("./SharpWorkOutline");

var _TwoToneWorkOutline = require("./TwoToneWorkOutline");

var WorkOutline =
/*#__PURE__*/
function WorkOutline(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledWorkOutline.FilledWorkOutline, _OutlineWorkOutline.OutlineWorkOutline, _RoundWorkOutline.RoundWorkOutline, _SharpWorkOutline.SharpWorkOutline, _TwoToneWorkOutline.TwoToneWorkOutline);
};

exports.WorkOutline = WorkOutline;