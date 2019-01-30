"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLocalFlorist = require("./FilledLocalFlorist");

var _OutlineLocalFlorist = require("./OutlineLocalFlorist");

var _RoundLocalFlorist = require("./RoundLocalFlorist");

var _SharpLocalFlorist = require("./SharpLocalFlorist");

var _TwoToneLocalFlorist = require("./TwoToneLocalFlorist");

var LocalFlorist =
/*#__PURE__*/
function LocalFlorist(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLocalFlorist.FilledLocalFlorist, _OutlineLocalFlorist.OutlineLocalFlorist, _RoundLocalFlorist.RoundLocalFlorist, _SharpLocalFlorist.SharpLocalFlorist, _TwoToneLocalFlorist.TwoToneLocalFlorist);
};

exports.LocalFlorist = LocalFlorist;