"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSwitchCamera = require("./FilledSwitchCamera");

var _OutlineSwitchCamera = require("./OutlineSwitchCamera");

var _RoundSwitchCamera = require("./RoundSwitchCamera");

var _SharpSwitchCamera = require("./SharpSwitchCamera");

var _TwoToneSwitchCamera = require("./TwoToneSwitchCamera");

var SwitchCamera =
/*#__PURE__*/
function SwitchCamera(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSwitchCamera.FilledSwitchCamera, _OutlineSwitchCamera.OutlineSwitchCamera, _RoundSwitchCamera.RoundSwitchCamera, _SharpSwitchCamera.SharpSwitchCamera, _TwoToneSwitchCamera.TwoToneSwitchCamera);
};

exports.SwitchCamera = SwitchCamera;