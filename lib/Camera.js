"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCamera = require("./FilledCamera");

var _OutlineCamera = require("./OutlineCamera");

var _RoundCamera = require("./RoundCamera");

var _SharpCamera = require("./SharpCamera");

var _TwoToneCamera = require("./TwoToneCamera");

var Camera =
/*#__PURE__*/
function Camera(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCamera.FilledCamera, _OutlineCamera.OutlineCamera, _RoundCamera.RoundCamera, _SharpCamera.SharpCamera, _TwoToneCamera.TwoToneCamera);
};

exports.Camera = Camera;