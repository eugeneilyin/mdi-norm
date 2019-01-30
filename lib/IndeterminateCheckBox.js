"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledIndeterminateCheckBox = require("./FilledIndeterminateCheckBox");

var _OutlineIndeterminateCheckBox = require("./OutlineIndeterminateCheckBox");

var _RoundIndeterminateCheckBox = require("./RoundIndeterminateCheckBox");

var _SharpIndeterminateCheckBox = require("./SharpIndeterminateCheckBox");

var _TwoToneIndeterminateCheckBox = require("./TwoToneIndeterminateCheckBox");

var IndeterminateCheckBox =
/*#__PURE__*/
function IndeterminateCheckBox(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledIndeterminateCheckBox.FilledIndeterminateCheckBox, _OutlineIndeterminateCheckBox.OutlineIndeterminateCheckBox, _RoundIndeterminateCheckBox.RoundIndeterminateCheckBox, _SharpIndeterminateCheckBox.SharpIndeterminateCheckBox, _TwoToneIndeterminateCheckBox.TwoToneIndeterminateCheckBox);
};

exports.IndeterminateCheckBox = IndeterminateCheckBox;