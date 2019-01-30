"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledQueuePlayNext = require("./FilledQueuePlayNext");

var _OutlineQueuePlayNext = require("./OutlineQueuePlayNext");

var _RoundQueuePlayNext = require("./RoundQueuePlayNext");

var _SharpQueuePlayNext = require("./SharpQueuePlayNext");

var _TwoToneQueuePlayNext = require("./TwoToneQueuePlayNext");

var QueuePlayNext =
/*#__PURE__*/
function QueuePlayNext(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledQueuePlayNext.FilledQueuePlayNext, _OutlineQueuePlayNext.OutlineQueuePlayNext, _RoundQueuePlayNext.RoundQueuePlayNext, _SharpQueuePlayNext.SharpQueuePlayNext, _TwoToneQueuePlayNext.TwoToneQueuePlayNext);
};

exports.QueuePlayNext = QueuePlayNext;