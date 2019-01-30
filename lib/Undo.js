"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledUndo = require("./FilledUndo");

var _OutlineUndo = require("./OutlineUndo");

var _RoundUndo = require("./RoundUndo");

var _SharpUndo = require("./SharpUndo");

var _TwoToneUndo = require("./TwoToneUndo");

var Undo =
/*#__PURE__*/
function Undo(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledUndo.FilledUndo, _OutlineUndo.OutlineUndo, _RoundUndo.RoundUndo, _SharpUndo.SharpUndo, _TwoToneUndo.TwoToneUndo);
};

exports.Undo = Undo;