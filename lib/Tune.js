"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledTune = require("./FilledTune");

var _OutlineTune = require("./OutlineTune");

var _RoundTune = require("./RoundTune");

var _SharpTune = require("./SharpTune");

var _TwoToneTune = require("./TwoToneTune");

var Tune =
/*#__PURE__*/
function Tune(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledTune.FilledTune, _OutlineTune.OutlineTune, _RoundTune.RoundTune, _SharpTune.SharpTune, _TwoToneTune.TwoToneTune);
};

exports.Tune = Tune;