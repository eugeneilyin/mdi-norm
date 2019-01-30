"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCardGiftcard = require("./FilledCardGiftcard");

var _OutlineCardGiftcard = require("./OutlineCardGiftcard");

var _RoundCardGiftcard = require("./RoundCardGiftcard");

var _SharpCardGiftcard = require("./SharpCardGiftcard");

var _TwoToneCardGiftcard = require("./TwoToneCardGiftcard");

var CardGiftcard =
/*#__PURE__*/
function CardGiftcard(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCardGiftcard.FilledCardGiftcard, _OutlineCardGiftcard.OutlineCardGiftcard, _RoundCardGiftcard.RoundCardGiftcard, _SharpCardGiftcard.SharpCardGiftcard, _TwoToneCardGiftcard.TwoToneCardGiftcard);
};

exports.CardGiftcard = CardGiftcard;