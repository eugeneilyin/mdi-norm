"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconVignetteFilled = require("./IconVignetteFilled");

var _IconVignetteOutlined = require("./IconVignetteOutlined");

var _IconVignetteRounded = require("./IconVignetteRounded");

var _IconVignetteSharp = require("./IconVignetteSharp");

var _IconVignetteTwoTone = require("./IconVignetteTwoTone");

var IconVignette =
/*#__PURE__*/
function IconVignette(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconVignetteFilled.IconVignetteFilled, _IconVignetteOutlined.IconVignetteOutlined, _IconVignetteRounded.IconVignetteRounded, _IconVignetteSharp.IconVignetteSharp, _IconVignetteTwoTone.IconVignetteTwoTone);
};

exports.IconVignette = IconVignette;