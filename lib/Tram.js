"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledTram = require("./FilledTram");

var _OutlineTram = require("./OutlineTram");

var _RoundTram = require("./RoundTram");

var _SharpTram = require("./SharpTram");

var _TwoToneTram = require("./TwoToneTram");

var Tram =
/*#__PURE__*/
function Tram(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledTram.FilledTram, _OutlineTram.OutlineTram, _RoundTram.RoundTram, _SharpTram.SharpTram, _TwoToneTram.TwoToneTram);
};

exports.Tram = Tram;