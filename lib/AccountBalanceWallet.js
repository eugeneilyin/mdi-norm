"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAccountBalanceWallet = require("./FilledAccountBalanceWallet");

var _OutlineAccountBalanceWallet = require("./OutlineAccountBalanceWallet");

var _RoundAccountBalanceWallet = require("./RoundAccountBalanceWallet");

var _SharpAccountBalanceWallet = require("./SharpAccountBalanceWallet");

var _TwoToneAccountBalanceWallet = require("./TwoToneAccountBalanceWallet");

var AccountBalanceWallet =
/*#__PURE__*/
function AccountBalanceWallet(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAccountBalanceWallet.FilledAccountBalanceWallet, _OutlineAccountBalanceWallet.OutlineAccountBalanceWallet, _RoundAccountBalanceWallet.RoundAccountBalanceWallet, _SharpAccountBalanceWallet.SharpAccountBalanceWallet, _TwoToneAccountBalanceWallet.TwoToneAccountBalanceWallet);
};

exports.AccountBalanceWallet = AccountBalanceWallet;