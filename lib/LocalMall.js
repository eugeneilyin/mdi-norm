"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLocalMall = require("./FilledLocalMall");

var _OutlineLocalMall = require("./OutlineLocalMall");

var _RoundLocalMall = require("./RoundLocalMall");

var _SharpLocalMall = require("./SharpLocalMall");

var _TwoToneLocalMall = require("./TwoToneLocalMall");

var LocalMall =
/*#__PURE__*/
function LocalMall(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLocalMall.FilledLocalMall, _OutlineLocalMall.OutlineLocalMall, _RoundLocalMall.RoundLocalMall, _SharpLocalMall.SharpLocalMall, _TwoToneLocalMall.TwoToneLocalMall);
};

exports.LocalMall = LocalMall;