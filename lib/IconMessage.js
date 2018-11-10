"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconMessageFilled = require("./IconMessageFilled");

var _IconMessageOutlined = require("./IconMessageOutlined");

var _IconMessageRounded = require("./IconMessageRounded");

var _IconMessageSharp = require("./IconMessageSharp");

var _IconMessageTwoTone = require("./IconMessageTwoTone");

var IconMessage =
/*#__PURE__*/
function IconMessage(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconMessageFilled.IconMessageFilled, _IconMessageOutlined.IconMessageOutlined, _IconMessageRounded.IconMessageRounded, _IconMessageSharp.IconMessageSharp, _IconMessageTwoTone.IconMessageTwoTone);
};

exports.IconMessage = IconMessage;