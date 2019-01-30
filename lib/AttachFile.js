"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAttachFile = require("./FilledAttachFile");

var _OutlineAttachFile = require("./OutlineAttachFile");

var _RoundAttachFile = require("./RoundAttachFile");

var _SharpAttachFile = require("./SharpAttachFile");

var _TwoToneAttachFile = require("./TwoToneAttachFile");

var AttachFile =
/*#__PURE__*/
function AttachFile(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAttachFile.FilledAttachFile, _OutlineAttachFile.OutlineAttachFile, _RoundAttachFile.RoundAttachFile, _SharpAttachFile.SharpAttachFile, _TwoToneAttachFile.TwoToneAttachFile);
};

exports.AttachFile = AttachFile;