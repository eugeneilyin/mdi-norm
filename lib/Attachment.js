"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAttachment = require("./FilledAttachment");

var _OutlineAttachment = require("./OutlineAttachment");

var _RoundAttachment = require("./RoundAttachment");

var _SharpAttachment = require("./SharpAttachment");

var _TwoToneAttachment = require("./TwoToneAttachment");

var Attachment =
/*#__PURE__*/
function Attachment(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAttachment.FilledAttachment, _OutlineAttachment.OutlineAttachment, _RoundAttachment.RoundAttachment, _SharpAttachment.SharpAttachment, _TwoToneAttachment.TwoToneAttachment);
};

exports.Attachment = Attachment;