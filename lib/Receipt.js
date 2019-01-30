"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledReceipt = require("./FilledReceipt");

var _OutlineReceipt = require("./OutlineReceipt");

var _RoundReceipt = require("./RoundReceipt");

var _SharpReceipt = require("./SharpReceipt");

var _TwoToneReceipt = require("./TwoToneReceipt");

var Receipt =
/*#__PURE__*/
function Receipt(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledReceipt.FilledReceipt, _OutlineReceipt.OutlineReceipt, _RoundReceipt.RoundReceipt, _SharpReceipt.SharpReceipt, _TwoToneReceipt.TwoToneReceipt);
};

exports.Receipt = Receipt;