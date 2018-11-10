"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconTonalityFilled = require("./IconTonalityFilled");

var _IconTonalityOutlined = require("./IconTonalityOutlined");

var _IconTonalityRounded = require("./IconTonalityRounded");

var _IconTonalitySharp = require("./IconTonalitySharp");

var _IconTonalityTwoTone = require("./IconTonalityTwoTone");

var IconTonality =
/*#__PURE__*/
function IconTonality(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconTonalityFilled.IconTonalityFilled, _IconTonalityOutlined.IconTonalityOutlined, _IconTonalityRounded.IconTonalityRounded, _IconTonalitySharp.IconTonalitySharp, _IconTonalityTwoTone.IconTonalityTwoTone);
};

exports.IconTonality = IconTonality;