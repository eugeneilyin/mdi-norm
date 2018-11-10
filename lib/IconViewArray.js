"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconViewArrayFilled = require("./IconViewArrayFilled");

var _IconViewArrayOutlined = require("./IconViewArrayOutlined");

var _IconViewArrayRounded = require("./IconViewArrayRounded");

var _IconViewArraySharp = require("./IconViewArraySharp");

var _IconViewArrayTwoTone = require("./IconViewArrayTwoTone");

var IconViewArray =
/*#__PURE__*/
function IconViewArray(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconViewArrayFilled.IconViewArrayFilled, _IconViewArrayOutlined.IconViewArrayOutlined, _IconViewArrayRounded.IconViewArrayRounded, _IconViewArraySharp.IconViewArraySharp, _IconViewArrayTwoTone.IconViewArrayTwoTone);
};

exports.IconViewArray = IconViewArray;