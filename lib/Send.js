"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSend = require("./FilledSend");

var _OutlineSend = require("./OutlineSend");

var _RoundSend = require("./RoundSend");

var _SharpSend = require("./SharpSend");

var _TwoToneSend = require("./TwoToneSend");

var Send =
/*#__PURE__*/
function Send(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSend.FilledSend, _OutlineSend.OutlineSend, _RoundSend.RoundSend, _SharpSend.SharpSend, _TwoToneSend.TwoToneSend);
};

exports.Send = Send;