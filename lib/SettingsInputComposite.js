"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSettingsInputComposite = require("./FilledSettingsInputComposite");

var _OutlineSettingsInputComposite = require("./OutlineSettingsInputComposite");

var _RoundSettingsInputComposite = require("./RoundSettingsInputComposite");

var _SharpSettingsInputComposite = require("./SharpSettingsInputComposite");

var _TwoToneSettingsInputComposite = require("./TwoToneSettingsInputComposite");

var SettingsInputComposite =
/*#__PURE__*/
function SettingsInputComposite(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSettingsInputComposite.FilledSettingsInputComposite, _OutlineSettingsInputComposite.OutlineSettingsInputComposite, _RoundSettingsInputComposite.RoundSettingsInputComposite, _SharpSettingsInputComposite.SharpSettingsInputComposite, _TwoToneSettingsInputComposite.TwoToneSettingsInputComposite);
};

exports.SettingsInputComposite = SettingsInputComposite;