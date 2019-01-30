"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledScreenRotation = require("./FilledScreenRotation");

var _OutlineScreenRotation = require("./OutlineScreenRotation");

var _RoundScreenRotation = require("./RoundScreenRotation");

var _SharpScreenRotation = require("./SharpScreenRotation");

var _TwoToneScreenRotation = require("./TwoToneScreenRotation");

var ScreenRotation =
/*#__PURE__*/
function ScreenRotation(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledScreenRotation.FilledScreenRotation, _OutlineScreenRotation.OutlineScreenRotation, _RoundScreenRotation.RoundScreenRotation, _SharpScreenRotation.SharpScreenRotation, _TwoToneScreenRotation.TwoToneScreenRotation);
};

exports.ScreenRotation = ScreenRotation;