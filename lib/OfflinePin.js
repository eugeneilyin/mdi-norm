"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledOfflinePin = require("./FilledOfflinePin");

var _OutlineOfflinePin = require("./OutlineOfflinePin");

var _RoundOfflinePin = require("./RoundOfflinePin");

var _SharpOfflinePin = require("./SharpOfflinePin");

var _TwoToneOfflinePin = require("./TwoToneOfflinePin");

var OfflinePin =
/*#__PURE__*/
function OfflinePin(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledOfflinePin.FilledOfflinePin, _OutlineOfflinePin.OutlineOfflinePin, _RoundOfflinePin.RoundOfflinePin, _SharpOfflinePin.SharpOfflinePin, _TwoToneOfflinePin.TwoToneOfflinePin);
};

exports.OfflinePin = OfflinePin;