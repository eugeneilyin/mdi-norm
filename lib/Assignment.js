"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAssignment = require("./FilledAssignment");

var _OutlineAssignment = require("./OutlineAssignment");

var _RoundAssignment = require("./RoundAssignment");

var _SharpAssignment = require("./SharpAssignment");

var _TwoToneAssignment = require("./TwoToneAssignment");

var Assignment =
/*#__PURE__*/
function Assignment(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAssignment.FilledAssignment, _OutlineAssignment.OutlineAssignment, _RoundAssignment.RoundAssignment, _SharpAssignment.SharpAssignment, _TwoToneAssignment.TwoToneAssignment);
};

exports.Assignment = Assignment;