"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCreditCard = require("./FilledCreditCard");

var _OutlineCreditCard = require("./OutlineCreditCard");

var _RoundCreditCard = require("./RoundCreditCard");

var _SharpCreditCard = require("./SharpCreditCard");

var _TwoToneCreditCard = require("./TwoToneCreditCard");

var CreditCard =
/*#__PURE__*/
function CreditCard(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCreditCard.FilledCreditCard, _OutlineCreditCard.OutlineCreditCard, _RoundCreditCard.RoundCreditCard, _SharpCreditCard.SharpCreditCard, _TwoToneCreditCard.TwoToneCreditCard);
};

exports.CreditCard = CreditCard;