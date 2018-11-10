"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconTransformFilled = require("./IconTransformFilled");

var _IconTransformOutlined = require("./IconTransformOutlined");

var _IconTransformRounded = require("./IconTransformRounded");

var _IconTransformSharp = require("./IconTransformSharp");

var _IconTransformTwoTone = require("./IconTransformTwoTone");

var IconTransform =
/*#__PURE__*/
function IconTransform(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconTransformFilled.IconTransformFilled, _IconTransformOutlined.IconTransformOutlined, _IconTransformRounded.IconTransformRounded, _IconTransformSharp.IconTransformSharp, _IconTransformTwoTone.IconTransformTwoTone);
};

exports.IconTransform = IconTransform;