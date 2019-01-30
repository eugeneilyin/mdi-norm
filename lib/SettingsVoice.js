"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSettingsVoice = require("./FilledSettingsVoice");

var _OutlineSettingsVoice = require("./OutlineSettingsVoice");

var _RoundSettingsVoice = require("./RoundSettingsVoice");

var _SharpSettingsVoice = require("./SharpSettingsVoice");

var _TwoToneSettingsVoice = require("./TwoToneSettingsVoice");

var SettingsVoice =
/*#__PURE__*/
function SettingsVoice(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSettingsVoice.FilledSettingsVoice, _OutlineSettingsVoice.OutlineSettingsVoice, _RoundSettingsVoice.RoundSettingsVoice, _SharpSettingsVoice.SharpSettingsVoice, _TwoToneSettingsVoice.TwoToneSettingsVoice);
};

exports.SettingsVoice = SettingsVoice;