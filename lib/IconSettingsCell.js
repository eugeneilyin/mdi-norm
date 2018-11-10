"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconSettingsCellFilled = require("./IconSettingsCellFilled");

var _IconSettingsCellOutlined = require("./IconSettingsCellOutlined");

var _IconSettingsCellRounded = require("./IconSettingsCellRounded");

var _IconSettingsCellSharp = require("./IconSettingsCellSharp");

var _IconSettingsCellTwoTone = require("./IconSettingsCellTwoTone");

var IconSettingsCell =
/*#__PURE__*/
function IconSettingsCell(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconSettingsCellFilled.IconSettingsCellFilled, _IconSettingsCellOutlined.IconSettingsCellOutlined, _IconSettingsCellRounded.IconSettingsCellRounded, _IconSettingsCellSharp.IconSettingsCellSharp, _IconSettingsCellTwoTone.IconSettingsCellTwoTone);
};

exports.IconSettingsCell = IconSettingsCell;