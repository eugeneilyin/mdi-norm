"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledInsertEmoticon = require("./FilledInsertEmoticon");

var _OutlineInsertEmoticon = require("./OutlineInsertEmoticon");

var _RoundInsertEmoticon = require("./RoundInsertEmoticon");

var _SharpInsertEmoticon = require("./SharpInsertEmoticon");

var _TwoToneInsertEmoticon = require("./TwoToneInsertEmoticon");

var InsertEmoticon =
/*#__PURE__*/
function InsertEmoticon(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledInsertEmoticon.FilledInsertEmoticon, _OutlineInsertEmoticon.OutlineInsertEmoticon, _RoundInsertEmoticon.RoundInsertEmoticon, _SharpInsertEmoticon.SharpInsertEmoticon, _TwoToneInsertEmoticon.TwoToneInsertEmoticon);
};

exports.InsertEmoticon = InsertEmoticon;