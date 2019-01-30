"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSimCard = require("./FilledSimCard");

var _OutlineSimCard = require("./OutlineSimCard");

var _RoundSimCard = require("./RoundSimCard");

var _SharpSimCard = require("./SharpSimCard");

var _TwoToneSimCard = require("./TwoToneSimCard");

var SimCard =
/*#__PURE__*/
function SimCard(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSimCard.FilledSimCard, _OutlineSimCard.OutlineSimCard, _RoundSimCard.RoundSimCard, _SharpSimCard.SharpSimCard, _TwoToneSimCard.TwoToneSimCard);
};

exports.SimCard = SimCard;