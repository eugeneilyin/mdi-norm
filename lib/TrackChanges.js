"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledTrackChanges = require("./FilledTrackChanges");

var _OutlineTrackChanges = require("./OutlineTrackChanges");

var _RoundTrackChanges = require("./RoundTrackChanges");

var _SharpTrackChanges = require("./SharpTrackChanges");

var _TwoToneTrackChanges = require("./TwoToneTrackChanges");

var TrackChanges =
/*#__PURE__*/
function TrackChanges(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledTrackChanges.FilledTrackChanges, _OutlineTrackChanges.OutlineTrackChanges, _RoundTrackChanges.RoundTrackChanges, _SharpTrackChanges.SharpTrackChanges, _TwoToneTrackChanges.TwoToneTrackChanges);
};

exports.TrackChanges = TrackChanges;