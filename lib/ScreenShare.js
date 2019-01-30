"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledScreenShare = require("./FilledScreenShare");

var _OutlineScreenShare = require("./OutlineScreenShare");

var _RoundScreenShare = require("./RoundScreenShare");

var _SharpScreenShare = require("./SharpScreenShare");

var _TwoToneScreenShare = require("./TwoToneScreenShare");

var ScreenShare =
/*#__PURE__*/
function ScreenShare(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledScreenShare.FilledScreenShare, _OutlineScreenShare.OutlineScreenShare, _RoundScreenShare.RoundScreenShare, _SharpScreenShare.SharpScreenShare, _TwoToneScreenShare.TwoToneScreenShare);
};

exports.ScreenShare = ScreenShare;