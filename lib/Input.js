"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledInput = require("./FilledInput");

var _OutlineInput = require("./OutlineInput");

var _RoundInput = require("./RoundInput");

var _SharpInput = require("./SharpInput");

var _TwoToneInput = require("./TwoToneInput");

var Input =
/*#__PURE__*/
function Input(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledInput.FilledInput, _OutlineInput.OutlineInput, _RoundInput.RoundInput, _SharpInput.SharpInput, _TwoToneInput.TwoToneInput);
};

exports.Input = Input;