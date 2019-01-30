"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledWaves = require("./FilledWaves");

var _OutlineWaves = require("./OutlineWaves");

var _RoundWaves = require("./RoundWaves");

var _SharpWaves = require("./SharpWaves");

var _TwoToneWaves = require("./TwoToneWaves");

var Waves =
/*#__PURE__*/
function Waves(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledWaves.FilledWaves, _OutlineWaves.OutlineWaves, _RoundWaves.RoundWaves, _SharpWaves.SharpWaves, _TwoToneWaves.TwoToneWaves);
};

exports.Waves = Waves;