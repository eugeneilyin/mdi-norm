"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledEdit = require("./FilledEdit");

var _OutlineEdit = require("./OutlineEdit");

var _RoundEdit = require("./RoundEdit");

var _SharpEdit = require("./SharpEdit");

var _TwoToneEdit = require("./TwoToneEdit");

var Edit =
/*#__PURE__*/
function Edit(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledEdit.FilledEdit, _OutlineEdit.OutlineEdit, _RoundEdit.RoundEdit, _SharpEdit.SharpEdit, _TwoToneEdit.TwoToneEdit);
};

exports.Edit = Edit;