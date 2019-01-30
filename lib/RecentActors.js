"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledRecentActors = require("./FilledRecentActors");

var _OutlineRecentActors = require("./OutlineRecentActors");

var _RoundRecentActors = require("./RoundRecentActors");

var _SharpRecentActors = require("./SharpRecentActors");

var _TwoToneRecentActors = require("./TwoToneRecentActors");

var RecentActors =
/*#__PURE__*/
function RecentActors(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledRecentActors.FilledRecentActors, _OutlineRecentActors.OutlineRecentActors, _RoundRecentActors.RoundRecentActors, _SharpRecentActors.SharpRecentActors, _TwoToneRecentActors.TwoToneRecentActors);
};

exports.RecentActors = RecentActors;