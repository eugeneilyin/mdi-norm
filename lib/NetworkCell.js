"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledNetworkCell = require("./FilledNetworkCell");

var _OutlineNetworkCell = require("./OutlineNetworkCell");

var _RoundNetworkCell = require("./RoundNetworkCell");

var _SharpNetworkCell = require("./SharpNetworkCell");

var _TwoToneNetworkCell = require("./TwoToneNetworkCell");

var NetworkCell =
/*#__PURE__*/
function NetworkCell(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledNetworkCell.FilledNetworkCell, _OutlineNetworkCell.OutlineNetworkCell, _RoundNetworkCell.RoundNetworkCell, _SharpNetworkCell.SharpNetworkCell, _TwoToneNetworkCell.TwoToneNetworkCell);
};

exports.NetworkCell = NetworkCell;