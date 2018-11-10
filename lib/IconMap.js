"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconMapFilled = require("./IconMapFilled");

var _IconMapOutlined = require("./IconMapOutlined");

var _IconMapRounded = require("./IconMapRounded");

var _IconMapSharp = require("./IconMapSharp");

var _IconMapTwoTone = require("./IconMapTwoTone");

var IconMap =
/*#__PURE__*/
function IconMap(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconMapFilled.IconMapFilled, _IconMapOutlined.IconMapOutlined, _IconMapRounded.IconMapRounded, _IconMapSharp.IconMapSharp, _IconMapTwoTone.IconMapTwoTone);
};

exports.IconMap = IconMap;