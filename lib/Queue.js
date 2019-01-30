"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledQueue = require("./FilledQueue");

var _OutlineQueue = require("./OutlineQueue");

var _RoundQueue = require("./RoundQueue");

var _SharpQueue = require("./SharpQueue");

var _TwoToneQueue = require("./TwoToneQueue");

var Queue =
/*#__PURE__*/
function Queue(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledQueue.FilledQueue, _OutlineQueue.OutlineQueue, _RoundQueue.RoundQueue, _SharpQueue.SharpQueue, _TwoToneQueue.TwoToneQueue);
};

exports.Queue = Queue;