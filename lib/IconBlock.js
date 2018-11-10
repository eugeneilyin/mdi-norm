"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconBlockFilled = require("./IconBlockFilled");

var _IconBlockOutlined = require("./IconBlockOutlined");

var _IconBlockRounded = require("./IconBlockRounded");

var _IconBlockSharp = require("./IconBlockSharp");

var _IconBlockTwoTone = require("./IconBlockTwoTone");

var IconBlock =
/*#__PURE__*/
function IconBlock(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconBlockFilled.IconBlockFilled, _IconBlockOutlined.IconBlockOutlined, _IconBlockRounded.IconBlockRounded, _IconBlockSharp.IconBlockSharp, _IconBlockTwoTone.IconBlockTwoTone);
};

exports.IconBlock = IconBlock;