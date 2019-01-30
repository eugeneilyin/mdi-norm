"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledNetworkCheck = require("./FilledNetworkCheck");

var _OutlineNetworkCheck = require("./OutlineNetworkCheck");

var _RoundNetworkCheck = require("./RoundNetworkCheck");

var _SharpNetworkCheck = require("./SharpNetworkCheck");

var _TwoToneNetworkCheck = require("./TwoToneNetworkCheck");

var NetworkCheck =
/*#__PURE__*/
function NetworkCheck(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledNetworkCheck.FilledNetworkCheck, _OutlineNetworkCheck.OutlineNetworkCheck, _RoundNetworkCheck.RoundNetworkCheck, _SharpNetworkCheck.SharpNetworkCheck, _TwoToneNetworkCheck.TwoToneNetworkCheck);
};

exports.NetworkCheck = NetworkCheck;