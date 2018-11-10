"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconGroupFilled = require("./IconGroupFilled");

var _IconGroupOutlined = require("./IconGroupOutlined");

var _IconGroupRounded = require("./IconGroupRounded");

var _IconGroupSharp = require("./IconGroupSharp");

var _IconGroupTwoTone = require("./IconGroupTwoTone");

var IconGroup =
/*#__PURE__*/
function IconGroup(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconGroupFilled.IconGroupFilled, _IconGroupOutlined.IconGroupOutlined, _IconGroupRounded.IconGroupRounded, _IconGroupSharp.IconGroupSharp, _IconGroupTwoTone.IconGroupTwoTone);
};

exports.IconGroup = IconGroup;