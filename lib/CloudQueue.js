"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCloudQueue = require("./FilledCloudQueue");

var _OutlineCloudQueue = require("./OutlineCloudQueue");

var _RoundCloudQueue = require("./RoundCloudQueue");

var _SharpCloudQueue = require("./SharpCloudQueue");

var _TwoToneCloudQueue = require("./TwoToneCloudQueue");

var CloudQueue =
/*#__PURE__*/
function CloudQueue(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCloudQueue.FilledCloudQueue, _OutlineCloudQueue.OutlineCloudQueue, _RoundCloudQueue.RoundCloudQueue, _SharpCloudQueue.SharpCloudQueue, _TwoToneCloudQueue.TwoToneCloudQueue);
};

exports.CloudQueue = CloudQueue;