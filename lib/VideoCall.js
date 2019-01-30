"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledVideoCall = require("./FilledVideoCall");

var _OutlineVideoCall = require("./OutlineVideoCall");

var _RoundVideoCall = require("./RoundVideoCall");

var _SharpVideoCall = require("./SharpVideoCall");

var _TwoToneVideoCall = require("./TwoToneVideoCall");

var VideoCall =
/*#__PURE__*/
function VideoCall(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledVideoCall.FilledVideoCall, _OutlineVideoCall.OutlineVideoCall, _RoundVideoCall.RoundVideoCall, _SharpVideoCall.SharpVideoCall, _TwoToneVideoCall.TwoToneVideoCall);
};

exports.VideoCall = VideoCall;