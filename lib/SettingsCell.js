"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSettingsCell = require("./FilledSettingsCell");

var _OutlineSettingsCell = require("./OutlineSettingsCell");

var _RoundSettingsCell = require("./RoundSettingsCell");

var _SharpSettingsCell = require("./SharpSettingsCell");

var _TwoToneSettingsCell = require("./TwoToneSettingsCell");

var SettingsCell =
/*#__PURE__*/
function SettingsCell(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSettingsCell.FilledSettingsCell, _OutlineSettingsCell.OutlineSettingsCell, _RoundSettingsCell.RoundSettingsCell, _SharpSettingsCell.SharpSettingsCell, _TwoToneSettingsCell.TwoToneSettingsCell);
};

exports.SettingsCell = SettingsCell;