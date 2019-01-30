"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledStop = require("./FilledStop");

var _OutlineStop = require("./OutlineStop");

var _RoundStop = require("./RoundStop");

var _SharpStop = require("./SharpStop");

var _TwoToneStop = require("./TwoToneStop");

var Stop =
/*#__PURE__*/
function Stop(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledStop.FilledStop, _OutlineStop.OutlineStop, _RoundStop.RoundStop, _SharpStop.SharpStop, _TwoToneStop.TwoToneStop);
};

exports.Stop = Stop;