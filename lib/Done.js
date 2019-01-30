"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDone = require("./FilledDone");

var _OutlineDone = require("./OutlineDone");

var _RoundDone = require("./RoundDone");

var _SharpDone = require("./SharpDone");

var _TwoToneDone = require("./TwoToneDone");

var Done =
/*#__PURE__*/
function Done(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDone.FilledDone, _OutlineDone.OutlineDone, _RoundDone.RoundDone, _SharpDone.SharpDone, _TwoToneDone.TwoToneDone);
};

exports.Done = Done;