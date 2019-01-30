"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSdCard = require("./FilledSdCard");

var _OutlineSdCard = require("./OutlineSdCard");

var _RoundSdCard = require("./RoundSdCard");

var _SharpSdCard = require("./SharpSdCard");

var _TwoToneSdCard = require("./TwoToneSdCard");

var SdCard =
/*#__PURE__*/
function SdCard(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSdCard.FilledSdCard, _OutlineSdCard.OutlineSdCard, _RoundSdCard.RoundSdCard, _SharpSdCard.SharpSdCard, _TwoToneSdCard.TwoToneSdCard);
};

exports.SdCard = SdCard;