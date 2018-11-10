"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconSimCardFilled = require("./IconSimCardFilled");

var _IconSimCardOutlined = require("./IconSimCardOutlined");

var _IconSimCardRounded = require("./IconSimCardRounded");

var _IconSimCardSharp = require("./IconSimCardSharp");

var _IconSimCardTwoTone = require("./IconSimCardTwoTone");

var IconSimCard =
/*#__PURE__*/
function IconSimCard(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconSimCardFilled.IconSimCardFilled, _IconSimCardOutlined.IconSimCardOutlined, _IconSimCardRounded.IconSimCardRounded, _IconSimCardSharp.IconSimCardSharp, _IconSimCardTwoTone.IconSimCardTwoTone);
};

exports.IconSimCard = IconSimCard;