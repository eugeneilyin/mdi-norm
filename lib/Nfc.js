"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledNfc = require("./FilledNfc");

var _OutlineNfc = require("./OutlineNfc");

var _RoundNfc = require("./RoundNfc");

var _SharpNfc = require("./SharpNfc");

var _TwoToneNfc = require("./TwoToneNfc");

var Nfc =
/*#__PURE__*/
function Nfc(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledNfc.FilledNfc, _OutlineNfc.OutlineNfc, _RoundNfc.RoundNfc, _SharpNfc.SharpNfc, _TwoToneNfc.TwoToneNfc);
};

exports.Nfc = Nfc;