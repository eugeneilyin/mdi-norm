"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledMemory = require("./FilledMemory");

var _OutlineMemory = require("./OutlineMemory");

var _RoundMemory = require("./RoundMemory");

var _SharpMemory = require("./SharpMemory");

var _TwoToneMemory = require("./TwoToneMemory");

var Memory =
/*#__PURE__*/
function Memory(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledMemory.FilledMemory, _OutlineMemory.OutlineMemory, _RoundMemory.RoundMemory, _SharpMemory.SharpMemory, _TwoToneMemory.TwoToneMemory);
};

exports.Memory = Memory;