"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledRestore = require("./FilledRestore");

var _OutlineRestore = require("./OutlineRestore");

var _RoundRestore = require("./RoundRestore");

var _SharpRestore = require("./SharpRestore");

var _TwoToneRestore = require("./TwoToneRestore");

var Restore =
/*#__PURE__*/
function Restore(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledRestore.FilledRestore, _OutlineRestore.OutlineRestore, _RoundRestore.RoundRestore, _SharpRestore.SharpRestore, _TwoToneRestore.TwoToneRestore);
};

exports.Restore = Restore;