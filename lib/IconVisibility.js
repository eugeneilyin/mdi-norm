"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconVisibilityFilled = require("./IconVisibilityFilled");

var _IconVisibilityOutlined = require("./IconVisibilityOutlined");

var _IconVisibilityRounded = require("./IconVisibilityRounded");

var _IconVisibilitySharp = require("./IconVisibilitySharp");

var _IconVisibilityTwoTone = require("./IconVisibilityTwoTone");

var IconVisibility =
/*#__PURE__*/
function IconVisibility(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconVisibilityFilled.IconVisibilityFilled, _IconVisibilityOutlined.IconVisibilityOutlined, _IconVisibilityRounded.IconVisibilityRounded, _IconVisibilitySharp.IconVisibilitySharp, _IconVisibilityTwoTone.IconVisibilityTwoTone);
};

exports.IconVisibility = IconVisibility;