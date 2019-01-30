"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAddBox = require("./FilledAddBox");

var _OutlineAddBox = require("./OutlineAddBox");

var _RoundAddBox = require("./RoundAddBox");

var _SharpAddBox = require("./SharpAddBox");

var _TwoToneAddBox = require("./TwoToneAddBox");

var AddBox =
/*#__PURE__*/
function AddBox(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAddBox.FilledAddBox, _OutlineAddBox.OutlineAddBox, _RoundAddBox.RoundAddBox, _SharpAddBox.SharpAddBox, _TwoToneAddBox.TwoToneAddBox);
};

exports.AddBox = AddBox;