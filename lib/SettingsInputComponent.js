"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSettingsInputComponent = require("./FilledSettingsInputComponent");

var _OutlineSettingsInputComponent = require("./OutlineSettingsInputComponent");

var _RoundSettingsInputComponent = require("./RoundSettingsInputComponent");

var _SharpSettingsInputComponent = require("./SharpSettingsInputComponent");

var _TwoToneSettingsInputComponent = require("./TwoToneSettingsInputComponent");

var SettingsInputComponent =
/*#__PURE__*/
function SettingsInputComponent(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSettingsInputComponent.FilledSettingsInputComponent, _OutlineSettingsInputComponent.OutlineSettingsInputComponent, _RoundSettingsInputComponent.RoundSettingsInputComponent, _SharpSettingsInputComponent.SharpSettingsInputComponent, _TwoToneSettingsInputComponent.TwoToneSettingsInputComponent);
};

exports.SettingsInputComponent = SettingsInputComponent;