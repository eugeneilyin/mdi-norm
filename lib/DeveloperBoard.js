"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDeveloperBoard = require("./FilledDeveloperBoard");

var _OutlineDeveloperBoard = require("./OutlineDeveloperBoard");

var _RoundDeveloperBoard = require("./RoundDeveloperBoard");

var _SharpDeveloperBoard = require("./SharpDeveloperBoard");

var _TwoToneDeveloperBoard = require("./TwoToneDeveloperBoard");

var DeveloperBoard =
/*#__PURE__*/
function DeveloperBoard(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDeveloperBoard.FilledDeveloperBoard, _OutlineDeveloperBoard.OutlineDeveloperBoard, _RoundDeveloperBoard.RoundDeveloperBoard, _SharpDeveloperBoard.SharpDeveloperBoard, _TwoToneDeveloperBoard.TwoToneDeveloperBoard);
};

exports.DeveloperBoard = DeveloperBoard;