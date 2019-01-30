"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledWatchLater = require("./FilledWatchLater");

var _OutlineWatchLater = require("./OutlineWatchLater");

var _RoundWatchLater = require("./RoundWatchLater");

var _SharpWatchLater = require("./SharpWatchLater");

var _TwoToneWatchLater = require("./TwoToneWatchLater");

var WatchLater =
/*#__PURE__*/
function WatchLater(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledWatchLater.FilledWatchLater, _OutlineWatchLater.OutlineWatchLater, _RoundWatchLater.RoundWatchLater, _SharpWatchLater.SharpWatchLater, _TwoToneWatchLater.TwoToneWatchLater);
};

exports.WatchLater = WatchLater;