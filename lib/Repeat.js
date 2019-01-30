"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledRepeat = require("./FilledRepeat");

var _OutlineRepeat = require("./OutlineRepeat");

var _RoundRepeat = require("./RoundRepeat");

var _SharpRepeat = require("./SharpRepeat");

var _TwoToneRepeat = require("./TwoToneRepeat");

var Repeat =
/*#__PURE__*/
function Repeat(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledRepeat.FilledRepeat, _OutlineRepeat.OutlineRepeat, _RoundRepeat.RoundRepeat, _SharpRepeat.SharpRepeat, _TwoToneRepeat.TwoToneRepeat);
};

exports.Repeat = Repeat;