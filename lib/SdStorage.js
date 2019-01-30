"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSdStorage = require("./FilledSdStorage");

var _OutlineSdStorage = require("./OutlineSdStorage");

var _RoundSdStorage = require("./RoundSdStorage");

var _SharpSdStorage = require("./SharpSdStorage");

var _TwoToneSdStorage = require("./TwoToneSdStorage");

var SdStorage =
/*#__PURE__*/
function SdStorage(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSdStorage.FilledSdStorage, _OutlineSdStorage.OutlineSdStorage, _RoundSdStorage.RoundSdStorage, _SharpSdStorage.SharpSdStorage, _TwoToneSdStorage.TwoToneSdStorage);
};

exports.SdStorage = SdStorage;