"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconTextFieldsFilled = require("./IconTextFieldsFilled");

var _IconTextFieldsOutlined = require("./IconTextFieldsOutlined");

var _IconTextFieldsRounded = require("./IconTextFieldsRounded");

var _IconTextFieldsSharp = require("./IconTextFieldsSharp");

var _IconTextFieldsTwoTone = require("./IconTextFieldsTwoTone");

var IconTextFields =
/*#__PURE__*/
function IconTextFields(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconTextFieldsFilled.IconTextFieldsFilled, _IconTextFieldsOutlined.IconTextFieldsOutlined, _IconTextFieldsRounded.IconTextFieldsRounded, _IconTextFieldsSharp.IconTextFieldsSharp, _IconTextFieldsTwoTone.IconTextFieldsTwoTone);
};

exports.IconTextFields = IconTextFields;