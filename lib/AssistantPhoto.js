"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAssistantPhoto = require("./FilledAssistantPhoto");

var _OutlineAssistantPhoto = require("./OutlineAssistantPhoto");

var _RoundAssistantPhoto = require("./RoundAssistantPhoto");

var _SharpAssistantPhoto = require("./SharpAssistantPhoto");

var _TwoToneAssistantPhoto = require("./TwoToneAssistantPhoto");

var AssistantPhoto =
/*#__PURE__*/
function AssistantPhoto(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAssistantPhoto.FilledAssistantPhoto, _OutlineAssistantPhoto.OutlineAssistantPhoto, _RoundAssistantPhoto.RoundAssistantPhoto, _SharpAssistantPhoto.SharpAssistantPhoto, _TwoToneAssistantPhoto.TwoToneAssistantPhoto);
};

exports.AssistantPhoto = AssistantPhoto;