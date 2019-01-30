"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPayment = require("./FilledPayment");

var _OutlinePayment = require("./OutlinePayment");

var _RoundPayment = require("./RoundPayment");

var _SharpPayment = require("./SharpPayment");

var _TwoTonePayment = require("./TwoTonePayment");

var Payment =
/*#__PURE__*/
function Payment(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPayment.FilledPayment, _OutlinePayment.OutlinePayment, _RoundPayment.RoundPayment, _SharpPayment.SharpPayment, _TwoTonePayment.TwoTonePayment);
};

exports.Payment = Payment;