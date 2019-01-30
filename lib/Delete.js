"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDelete = require("./FilledDelete");

var _OutlineDelete = require("./OutlineDelete");

var _RoundDelete = require("./RoundDelete");

var _SharpDelete = require("./SharpDelete");

var _TwoToneDelete = require("./TwoToneDelete");

var Delete =
/*#__PURE__*/
function Delete(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDelete.FilledDelete, _OutlineDelete.OutlineDelete, _RoundDelete.RoundDelete, _SharpDelete.SharpDelete, _TwoToneDelete.TwoToneDelete);
};

exports.Delete = Delete;