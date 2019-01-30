"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLock = require("./FilledLock");

var _OutlineLock = require("./OutlineLock");

var _RoundLock = require("./RoundLock");

var _SharpLock = require("./SharpLock");

var _TwoToneLock = require("./TwoToneLock");

var Lock =
/*#__PURE__*/
function Lock(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLock.FilledLock, _OutlineLock.OutlineLock, _RoundLock.RoundLock, _SharpLock.SharpLock, _TwoToneLock.TwoToneLock);
};

exports.Lock = Lock;