"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCellWifi = require("./FilledCellWifi");

var _OutlineCellWifi = require("./OutlineCellWifi");

var _RoundCellWifi = require("./RoundCellWifi");

var _SharpCellWifi = require("./SharpCellWifi");

var _TwoToneCellWifi = require("./TwoToneCellWifi");

var CellWifi =
/*#__PURE__*/
function CellWifi(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCellWifi.FilledCellWifi, _OutlineCellWifi.OutlineCellWifi, _RoundCellWifi.RoundCellWifi, _SharpCellWifi.SharpCellWifi, _TwoToneCellWifi.TwoToneCellWifi);
};

exports.CellWifi = CellWifi;