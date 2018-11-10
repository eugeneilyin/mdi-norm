"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconClassFilled = require("./IconClassFilled");

var _IconClassOutlined = require("./IconClassOutlined");

var _IconClassRounded = require("./IconClassRounded");

var _IconClassSharp = require("./IconClassSharp");

var _IconClassTwoTone = require("./IconClassTwoTone");

var IconClass =
/*#__PURE__*/
function IconClass(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconClassFilled.IconClassFilled, _IconClassOutlined.IconClassOutlined, _IconClassRounded.IconClassRounded, _IconClassSharp.IconClassSharp, _IconClassTwoTone.IconClassTwoTone);
};

exports.IconClass = IconClass;