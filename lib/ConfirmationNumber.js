"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledConfirmationNumber = require("./FilledConfirmationNumber");

var _OutlineConfirmationNumber = require("./OutlineConfirmationNumber");

var _RoundConfirmationNumber = require("./RoundConfirmationNumber");

var _SharpConfirmationNumber = require("./SharpConfirmationNumber");

var _TwoToneConfirmationNumber = require("./TwoToneConfirmationNumber");

var ConfirmationNumber =
/*#__PURE__*/
function ConfirmationNumber(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledConfirmationNumber.FilledConfirmationNumber, _OutlineConfirmationNumber.OutlineConfirmationNumber, _RoundConfirmationNumber.RoundConfirmationNumber, _SharpConfirmationNumber.SharpConfirmationNumber, _TwoToneConfirmationNumber.TwoToneConfirmationNumber);
};

exports.ConfirmationNumber = ConfirmationNumber;