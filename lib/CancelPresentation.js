"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCancelPresentation = require("./FilledCancelPresentation");

var _OutlineCancelPresentation = require("./OutlineCancelPresentation");

var _RoundCancelPresentation = require("./RoundCancelPresentation");

var _SharpCancelPresentation = require("./SharpCancelPresentation");

var _TwoToneCancelPresentation = require("./TwoToneCancelPresentation");

var CancelPresentation =
/*#__PURE__*/
function CancelPresentation(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCancelPresentation.FilledCancelPresentation, _OutlineCancelPresentation.OutlineCancelPresentation, _RoundCancelPresentation.RoundCancelPresentation, _SharpCancelPresentation.SharpCancelPresentation, _TwoToneCancelPresentation.TwoToneCancelPresentation);
};

exports.CancelPresentation = CancelPresentation;