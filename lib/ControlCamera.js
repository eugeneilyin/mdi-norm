"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledControlCamera = require("./FilledControlCamera");

var _OutlineControlCamera = require("./OutlineControlCamera");

var _RoundControlCamera = require("./RoundControlCamera");

var _SharpControlCamera = require("./SharpControlCamera");

var _TwoToneControlCamera = require("./TwoToneControlCamera");

var ControlCamera =
/*#__PURE__*/
function ControlCamera(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledControlCamera.FilledControlCamera, _OutlineControlCamera.OutlineControlCamera, _RoundControlCamera.RoundControlCamera, _SharpControlCamera.SharpControlCamera, _TwoToneControlCamera.TwoToneControlCamera);
};

exports.ControlCamera = ControlCamera;