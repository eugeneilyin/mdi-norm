"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconExtensionFilled = require("./IconExtensionFilled");

var _IconExtensionOutlined = require("./IconExtensionOutlined");

var _IconExtensionRounded = require("./IconExtensionRounded");

var _IconExtensionSharp = require("./IconExtensionSharp");

var _IconExtensionTwoTone = require("./IconExtensionTwoTone");

var IconExtension =
/*#__PURE__*/
function IconExtension(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconExtensionFilled.IconExtensionFilled, _IconExtensionOutlined.IconExtensionOutlined, _IconExtensionRounded.IconExtensionRounded, _IconExtensionSharp.IconExtensionSharp, _IconExtensionTwoTone.IconExtensionTwoTone);
};

exports.IconExtension = IconExtension;