"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFiberSmartRecord = require("./FilledFiberSmartRecord");

var _OutlineFiberSmartRecord = require("./OutlineFiberSmartRecord");

var _RoundFiberSmartRecord = require("./RoundFiberSmartRecord");

var _SharpFiberSmartRecord = require("./SharpFiberSmartRecord");

var _TwoToneFiberSmartRecord = require("./TwoToneFiberSmartRecord");

var FiberSmartRecord =
/*#__PURE__*/
function FiberSmartRecord(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFiberSmartRecord.FilledFiberSmartRecord, _OutlineFiberSmartRecord.OutlineFiberSmartRecord, _RoundFiberSmartRecord.RoundFiberSmartRecord, _SharpFiberSmartRecord.SharpFiberSmartRecord, _TwoToneFiberSmartRecord.TwoToneFiberSmartRecord);
};

exports.FiberSmartRecord = FiberSmartRecord;