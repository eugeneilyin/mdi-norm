"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledRedeem = require("./FilledRedeem");

var _OutlineRedeem = require("./OutlineRedeem");

var _RoundRedeem = require("./RoundRedeem");

var _SharpRedeem = require("./SharpRedeem");

var _TwoToneRedeem = require("./TwoToneRedeem");

var Redeem =
/*#__PURE__*/
function Redeem(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledRedeem.FilledRedeem, _OutlineRedeem.OutlineRedeem, _RoundRedeem.RoundRedeem, _SharpRedeem.SharpRedeem, _TwoToneRedeem.TwoToneRedeem);
};

exports.Redeem = Redeem;