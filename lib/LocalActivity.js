"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLocalActivity = require("./FilledLocalActivity");

var _OutlineLocalActivity = require("./OutlineLocalActivity");

var _RoundLocalActivity = require("./RoundLocalActivity");

var _SharpLocalActivity = require("./SharpLocalActivity");

var _TwoToneLocalActivity = require("./TwoToneLocalActivity");

var LocalActivity =
/*#__PURE__*/
function LocalActivity(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLocalActivity.FilledLocalActivity, _OutlineLocalActivity.OutlineLocalActivity, _RoundLocalActivity.RoundLocalActivity, _SharpLocalActivity.SharpLocalActivity, _TwoToneLocalActivity.TwoToneLocalActivity);
};

exports.LocalActivity = LocalActivity;