"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledVideocam = require("./FilledVideocam");

var _OutlineVideocam = require("./OutlineVideocam");

var _RoundVideocam = require("./RoundVideocam");

var _SharpVideocam = require("./SharpVideocam");

var _TwoToneVideocam = require("./TwoToneVideocam");

var Videocam =
/*#__PURE__*/
function Videocam(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledVideocam.FilledVideocam, _OutlineVideocam.OutlineVideocam, _RoundVideocam.RoundVideocam, _SharpVideocam.SharpVideocam, _TwoToneVideocam.TwoToneVideocam);
};

exports.Videocam = Videocam;