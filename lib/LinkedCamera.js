"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLinkedCamera = require("./FilledLinkedCamera");

var _OutlineLinkedCamera = require("./OutlineLinkedCamera");

var _RoundLinkedCamera = require("./RoundLinkedCamera");

var _SharpLinkedCamera = require("./SharpLinkedCamera");

var _TwoToneLinkedCamera = require("./TwoToneLinkedCamera");

var LinkedCamera =
/*#__PURE__*/
function LinkedCamera(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLinkedCamera.FilledLinkedCamera, _OutlineLinkedCamera.OutlineLinkedCamera, _RoundLinkedCamera.RoundLinkedCamera, _SharpLinkedCamera.SharpLinkedCamera, _TwoToneLinkedCamera.TwoToneLinkedCamera);
};

exports.LinkedCamera = LinkedCamera;