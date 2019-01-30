"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSupervisorAccount = require("./FilledSupervisorAccount");

var _OutlineSupervisorAccount = require("./OutlineSupervisorAccount");

var _RoundSupervisorAccount = require("./RoundSupervisorAccount");

var _SharpSupervisorAccount = require("./SharpSupervisorAccount");

var _TwoToneSupervisorAccount = require("./TwoToneSupervisorAccount");

var SupervisorAccount =
/*#__PURE__*/
function SupervisorAccount(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSupervisorAccount.FilledSupervisorAccount, _OutlineSupervisorAccount.OutlineSupervisorAccount, _RoundSupervisorAccount.RoundSupervisorAccount, _SharpSupervisorAccount.SharpSupervisorAccount, _TwoToneSupervisorAccount.TwoToneSupervisorAccount);
};

exports.SupervisorAccount = SupervisorAccount;