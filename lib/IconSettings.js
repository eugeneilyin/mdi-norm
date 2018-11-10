"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconSettingsFilled = require("./IconSettingsFilled");

var _IconSettingsOutlined = require("./IconSettingsOutlined");

var _IconSettingsRounded = require("./IconSettingsRounded");

var _IconSettingsSharp = require("./IconSettingsSharp");

var _IconSettingsTwoTone = require("./IconSettingsTwoTone");

var IconSettings =
/*#__PURE__*/
function IconSettings(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconSettingsFilled.IconSettingsFilled, _IconSettingsOutlined.IconSettingsOutlined, _IconSettingsRounded.IconSettingsRounded, _IconSettingsSharp.IconSettingsSharp, _IconSettingsTwoTone.IconSettingsTwoTone);
};

exports.IconSettings = IconSettings;