"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAccountBalance = require("./FilledAccountBalance");

var _OutlineAccountBalance = require("./OutlineAccountBalance");

var _RoundAccountBalance = require("./RoundAccountBalance");

var _SharpAccountBalance = require("./SharpAccountBalance");

var _TwoToneAccountBalance = require("./TwoToneAccountBalance");

var AccountBalance =
/*#__PURE__*/
function AccountBalance(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAccountBalance.FilledAccountBalance, _OutlineAccountBalance.OutlineAccountBalance, _RoundAccountBalance.RoundAccountBalance, _SharpAccountBalance.SharpAccountBalance, _TwoToneAccountBalance.TwoToneAccountBalance);
};

exports.AccountBalance = AccountBalance;