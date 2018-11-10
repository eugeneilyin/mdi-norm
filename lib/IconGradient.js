"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconGradientFilled = require("./IconGradientFilled");

var _IconGradientOutlined = require("./IconGradientOutlined");

var _IconGradientRounded = require("./IconGradientRounded");

var _IconGradientSharp = require("./IconGradientSharp");

var _IconGradientTwoTone = require("./IconGradientTwoTone");

var IconGradient =
/*#__PURE__*/
function IconGradient(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconGradientFilled.IconGradientFilled, _IconGradientOutlined.IconGradientOutlined, _IconGradientRounded.IconGradientRounded, _IconGradientSharp.IconGradientSharp, _IconGradientTwoTone.IconGradientTwoTone);
};

exports.IconGradient = IconGradient;