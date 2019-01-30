"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDock = require("./FilledDock");

var _OutlineDock = require("./OutlineDock");

var _RoundDock = require("./RoundDock");

var _SharpDock = require("./SharpDock");

var _TwoToneDock = require("./TwoToneDock");

var Dock =
/*#__PURE__*/
function Dock(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDock.FilledDock, _OutlineDock.OutlineDock, _RoundDock.RoundDock, _SharpDock.SharpDock, _TwoToneDock.TwoToneDock);
};

exports.Dock = Dock;