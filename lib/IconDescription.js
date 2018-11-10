"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconDescriptionFilled = require("./IconDescriptionFilled");

var _IconDescriptionOutlined = require("./IconDescriptionOutlined");

var _IconDescriptionRounded = require("./IconDescriptionRounded");

var _IconDescriptionSharp = require("./IconDescriptionSharp");

var _IconDescriptionTwoTone = require("./IconDescriptionTwoTone");

var IconDescription =
/*#__PURE__*/
function IconDescription(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconDescriptionFilled.IconDescriptionFilled, _IconDescriptionOutlined.IconDescriptionOutlined, _IconDescriptionRounded.IconDescriptionRounded, _IconDescriptionSharp.IconDescriptionSharp, _IconDescriptionTwoTone.IconDescriptionTwoTone);
};

exports.IconDescription = IconDescription;