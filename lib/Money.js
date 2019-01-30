"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledMoney = require("./FilledMoney");

var _OutlineMoney = require("./OutlineMoney");

var _RoundMoney = require("./RoundMoney");

var _SharpMoney = require("./SharpMoney");

var _TwoToneMoney = require("./TwoToneMoney");

var Money =
/*#__PURE__*/
function Money(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledMoney.FilledMoney, _OutlineMoney.OutlineMoney, _RoundMoney.RoundMoney, _SharpMoney.SharpMoney, _TwoToneMoney.TwoToneMoney);
};

exports.Money = Money;