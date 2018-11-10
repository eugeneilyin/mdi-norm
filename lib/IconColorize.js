"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconColorizeFilled = require("./IconColorizeFilled");

var _IconColorizeOutlined = require("./IconColorizeOutlined");

var _IconColorizeRounded = require("./IconColorizeRounded");

var _IconColorizeSharp = require("./IconColorizeSharp");

var _IconColorizeTwoTone = require("./IconColorizeTwoTone");

var IconColorize =
/*#__PURE__*/
function IconColorize(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconColorizeFilled.IconColorizeFilled, _IconColorizeOutlined.IconColorizeOutlined, _IconColorizeRounded.IconColorizeRounded, _IconColorizeSharp.IconColorizeSharp, _IconColorizeTwoTone.IconColorizeTwoTone);
};

exports.IconColorize = IconColorize;