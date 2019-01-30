"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDepartureBoard = require("./FilledDepartureBoard");

var _OutlineDepartureBoard = require("./OutlineDepartureBoard");

var _RoundDepartureBoard = require("./RoundDepartureBoard");

var _SharpDepartureBoard = require("./SharpDepartureBoard");

var _TwoToneDepartureBoard = require("./TwoToneDepartureBoard");

var DepartureBoard =
/*#__PURE__*/
function DepartureBoard(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDepartureBoard.FilledDepartureBoard, _OutlineDepartureBoard.OutlineDepartureBoard, _RoundDepartureBoard.RoundDepartureBoard, _SharpDepartureBoard.SharpDepartureBoard, _TwoToneDepartureBoard.TwoToneDepartureBoard);
};

exports.DepartureBoard = DepartureBoard;