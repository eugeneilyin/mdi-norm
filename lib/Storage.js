"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledStorage = require("./FilledStorage");

var _OutlineStorage = require("./OutlineStorage");

var _RoundStorage = require("./RoundStorage");

var _SharpStorage = require("./SharpStorage");

var _TwoToneStorage = require("./TwoToneStorage");

var Storage =
/*#__PURE__*/
function Storage(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledStorage.FilledStorage, _OutlineStorage.OutlineStorage, _RoundStorage.RoundStorage, _SharpStorage.SharpStorage, _TwoToneStorage.TwoToneStorage);
};

exports.Storage = Storage;