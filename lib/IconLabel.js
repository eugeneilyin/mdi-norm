"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconLabelFilled = require("./IconLabelFilled");

var _IconLabelOutlined = require("./IconLabelOutlined");

var _IconLabelRounded = require("./IconLabelRounded");

var _IconLabelSharp = require("./IconLabelSharp");

var _IconLabelTwoTone = require("./IconLabelTwoTone");

var IconLabel =
/*#__PURE__*/
function IconLabel(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconLabelFilled.IconLabelFilled, _IconLabelOutlined.IconLabelOutlined, _IconLabelRounded.IconLabelRounded, _IconLabelSharp.IconLabelSharp, _IconLabelTwoTone.IconLabelTwoTone);
};

exports.IconLabel = IconLabel;