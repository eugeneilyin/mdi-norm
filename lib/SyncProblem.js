"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSyncProblem = require("./FilledSyncProblem");

var _OutlineSyncProblem = require("./OutlineSyncProblem");

var _RoundSyncProblem = require("./RoundSyncProblem");

var _SharpSyncProblem = require("./SharpSyncProblem");

var _TwoToneSyncProblem = require("./TwoToneSyncProblem");

var SyncProblem =
/*#__PURE__*/
function SyncProblem(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSyncProblem.FilledSyncProblem, _OutlineSyncProblem.OutlineSyncProblem, _RoundSyncProblem.RoundSyncProblem, _SharpSyncProblem.SharpSyncProblem, _TwoToneSyncProblem.TwoToneSyncProblem);
};

exports.SyncProblem = SyncProblem;