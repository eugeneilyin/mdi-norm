"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconNavigationFilled = require("./IconNavigationFilled");

var _IconNavigationOutlined = require("./IconNavigationOutlined");

var _IconNavigationRounded = require("./IconNavigationRounded");

var _IconNavigationSharp = require("./IconNavigationSharp");

var _IconNavigationTwoTone = require("./IconNavigationTwoTone");

var IconNavigation =
/*#__PURE__*/
function IconNavigation(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconNavigationFilled.IconNavigationFilled, _IconNavigationOutlined.IconNavigationOutlined, _IconNavigationRounded.IconNavigationRounded, _IconNavigationSharp.IconNavigationSharp, _IconNavigationTwoTone.IconNavigationTwoTone);
};

exports.IconNavigation = IconNavigation;