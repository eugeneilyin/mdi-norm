"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSettingsRemote = require("./FilledSettingsRemote");

var _OutlineSettingsRemote = require("./OutlineSettingsRemote");

var _RoundSettingsRemote = require("./RoundSettingsRemote");

var _SharpSettingsRemote = require("./SharpSettingsRemote");

var _TwoToneSettingsRemote = require("./TwoToneSettingsRemote");

var SettingsRemote =
/*#__PURE__*/
function SettingsRemote(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSettingsRemote.FilledSettingsRemote, _OutlineSettingsRemote.OutlineSettingsRemote, _RoundSettingsRemote.RoundSettingsRemote, _SharpSettingsRemote.SharpSettingsRemote, _TwoToneSettingsRemote.TwoToneSettingsRemote);
};

exports.SettingsRemote = SettingsRemote;