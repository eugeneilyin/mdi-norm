"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledTextFields = require("./FilledTextFields");

var _OutlineTextFields = require("./OutlineTextFields");

var _RoundTextFields = require("./RoundTextFields");

var _SharpTextFields = require("./SharpTextFields");

var _TwoToneTextFields = require("./TwoToneTextFields");

var TextFields =
/*#__PURE__*/
function TextFields(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledTextFields.FilledTextFields, _OutlineTextFields.OutlineTextFields, _RoundTextFields.RoundTextFields, _SharpTextFields.SharpTextFields, _TwoToneTextFields.TwoToneTextFields);
};

exports.TextFields = TextFields;