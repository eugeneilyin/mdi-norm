"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSettingsOverscan = require("./FilledSettingsOverscan");

var _OutlineSettingsOverscan = require("./OutlineSettingsOverscan");

var _RoundSettingsOverscan = require("./RoundSettingsOverscan");

var _SharpSettingsOverscan = require("./SharpSettingsOverscan");

var _TwoToneSettingsOverscan = require("./TwoToneSettingsOverscan");

var SettingsOverscan =
/*#__PURE__*/
function SettingsOverscan(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSettingsOverscan.FilledSettingsOverscan, _OutlineSettingsOverscan.OutlineSettingsOverscan, _RoundSettingsOverscan.RoundSettingsOverscan, _SharpSettingsOverscan.SharpSettingsOverscan, _TwoToneSettingsOverscan.TwoToneSettingsOverscan);
};

exports.SettingsOverscan = SettingsOverscan;