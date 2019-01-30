"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBlock = require("./FilledBlock");

var _OutlineBlock = require("./OutlineBlock");

var _RoundBlock = require("./RoundBlock");

var _SharpBlock = require("./SharpBlock");

var _TwoToneBlock = require("./TwoToneBlock");

var Block =
/*#__PURE__*/
function Block(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBlock.FilledBlock, _OutlineBlock.OutlineBlock, _RoundBlock.RoundBlock, _SharpBlock.SharpBlock, _TwoToneBlock.TwoToneBlock);
};

exports.Block = Block;