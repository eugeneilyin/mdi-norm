"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconListFilled = require("./IconListFilled");

var _IconListOutlined = require("./IconListOutlined");

var _IconListRounded = require("./IconListRounded");

var _IconListSharp = require("./IconListSharp");

var _IconListTwoTone = require("./IconListTwoTone");

var IconList =
/*#__PURE__*/
function IconList(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconListFilled.IconListFilled, _IconListOutlined.IconListOutlined, _IconListRounded.IconListRounded, _IconListSharp.IconListSharp, _IconListTwoTone.IconListTwoTone);
};

exports.IconList = IconList;