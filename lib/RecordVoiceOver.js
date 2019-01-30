"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledRecordVoiceOver = require("./FilledRecordVoiceOver");

var _OutlineRecordVoiceOver = require("./OutlineRecordVoiceOver");

var _RoundRecordVoiceOver = require("./RoundRecordVoiceOver");

var _SharpRecordVoiceOver = require("./SharpRecordVoiceOver");

var _TwoToneRecordVoiceOver = require("./TwoToneRecordVoiceOver");

var RecordVoiceOver =
/*#__PURE__*/
function RecordVoiceOver(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledRecordVoiceOver.FilledRecordVoiceOver, _OutlineRecordVoiceOver.OutlineRecordVoiceOver, _RoundRecordVoiceOver.RoundRecordVoiceOver, _SharpRecordVoiceOver.SharpRecordVoiceOver, _TwoToneRecordVoiceOver.TwoToneRecordVoiceOver);
};

exports.RecordVoiceOver = RecordVoiceOver;