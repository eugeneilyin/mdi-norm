"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconAttachmentFilled = require("./IconAttachmentFilled");

var _IconAttachmentOutlined = require("./IconAttachmentOutlined");

var _IconAttachmentRounded = require("./IconAttachmentRounded");

var _IconAttachmentSharp = require("./IconAttachmentSharp");

var _IconAttachmentTwoTone = require("./IconAttachmentTwoTone");

var IconAttachment =
/*#__PURE__*/
function IconAttachment(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconAttachmentFilled.IconAttachmentFilled, _IconAttachmentOutlined.IconAttachmentOutlined, _IconAttachmentRounded.IconAttachmentRounded, _IconAttachmentSharp.IconAttachmentSharp, _IconAttachmentTwoTone.IconAttachmentTwoTone);
};

exports.IconAttachment = IconAttachment;