"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconFaceFilled = require("./IconFaceFilled");

var _IconFaceOutlined = require("./IconFaceOutlined");

var _IconFaceRounded = require("./IconFaceRounded");

var _IconFaceSharp = require("./IconFaceSharp");

var _IconFaceTwoTone = require("./IconFaceTwoTone");

var IconFace =
/*#__PURE__*/
function IconFace(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconFaceFilled.IconFaceFilled, _IconFaceOutlined.IconFaceOutlined, _IconFaceRounded.IconFaceRounded, _IconFaceSharp.IconFaceSharp, _IconFaceTwoTone.IconFaceTwoTone);
};

exports.IconFace = IconFace;