"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFlag = require("./FilledFlag");

var _OutlineFlag = require("./OutlineFlag");

var _RoundFlag = require("./RoundFlag");

var _SharpFlag = require("./SharpFlag");

var _TwoToneFlag = require("./TwoToneFlag");

var Flag =
/*#__PURE__*/
function Flag(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFlag.FilledFlag, _OutlineFlag.OutlineFlag, _RoundFlag.RoundFlag, _SharpFlag.SharpFlag, _TwoToneFlag.TwoToneFlag);
};

exports.Flag = Flag;