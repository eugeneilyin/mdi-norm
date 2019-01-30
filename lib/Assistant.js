"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAssistant = require("./FilledAssistant");

var _OutlineAssistant = require("./OutlineAssistant");

var _RoundAssistant = require("./RoundAssistant");

var _SharpAssistant = require("./SharpAssistant");

var _TwoToneAssistant = require("./TwoToneAssistant");

var Assistant =
/*#__PURE__*/
function Assistant(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAssistant.FilledAssistant, _OutlineAssistant.OutlineAssistant, _RoundAssistant.RoundAssistant, _SharpAssistant.SharpAssistant, _TwoToneAssistant.TwoToneAssistant);
};

exports.Assistant = Assistant;