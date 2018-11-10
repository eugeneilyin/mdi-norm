"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconAccountBalanceFilled = require("./IconAccountBalanceFilled");

var _IconAccountBalanceOutlined = require("./IconAccountBalanceOutlined");

var _IconAccountBalanceRounded = require("./IconAccountBalanceRounded");

var _IconAccountBalanceSharp = require("./IconAccountBalanceSharp");

var _IconAccountBalanceTwoTone = require("./IconAccountBalanceTwoTone");

var IconAccountBalance =
/*#__PURE__*/
function IconAccountBalance(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconAccountBalanceFilled.IconAccountBalanceFilled, _IconAccountBalanceOutlined.IconAccountBalanceOutlined, _IconAccountBalanceRounded.IconAccountBalanceRounded, _IconAccountBalanceSharp.IconAccountBalanceSharp, _IconAccountBalanceTwoTone.IconAccountBalanceTwoTone);
};

exports.IconAccountBalance = IconAccountBalance;