"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCheckBox = require("./FilledCheckBox");

var _OutlineCheckBox = require("./OutlineCheckBox");

var _RoundCheckBox = require("./RoundCheckBox");

var _SharpCheckBox = require("./SharpCheckBox");

var _TwoToneCheckBox = require("./TwoToneCheckBox");

var CheckBox =
/*#__PURE__*/
function CheckBox(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCheckBox.FilledCheckBox, _OutlineCheckBox.OutlineCheckBox, _RoundCheckBox.RoundCheckBox, _SharpCheckBox.SharpCheckBox, _TwoToneCheckBox.TwoToneCheckBox);
};

exports.CheckBox = CheckBox;