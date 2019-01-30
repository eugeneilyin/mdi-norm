"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledRedo = require("./FilledRedo");

var _OutlineRedo = require("./OutlineRedo");

var _RoundRedo = require("./RoundRedo");

var _SharpRedo = require("./SharpRedo");

var _TwoToneRedo = require("./TwoToneRedo");

var Redo =
/*#__PURE__*/
function Redo(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledRedo.FilledRedo, _OutlineRedo.OutlineRedo, _RoundRedo.RoundRedo, _SharpRedo.SharpRedo, _TwoToneRedo.TwoToneRedo);
};

exports.Redo = Redo;