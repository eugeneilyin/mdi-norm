"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneVoiceChat =
/*#__PURE__*/
function TwoToneVoiceChat(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 17.17L5.17 16H20V4H4zM7 7h7v2.4L17 7v6l-3-2.4V13H7z"
  }), _react.default.createElement("path", {
    d: _fragments.jl + _fragments.baa + "m-6-5.4l3 2.4V7l-3 2.4V7H7v6h7z"
  }));
};

exports.TwoToneVoiceChat = TwoToneVoiceChat;