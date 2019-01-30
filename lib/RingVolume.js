"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledRingVolume = require("./FilledRingVolume");

var _OutlineRingVolume = require("./OutlineRingVolume");

var _RoundRingVolume = require("./RoundRingVolume");

var _SharpRingVolume = require("./SharpRingVolume");

var _TwoToneRingVolume = require("./TwoToneRingVolume");

var RingVolume =
/*#__PURE__*/
function RingVolume(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledRingVolume.FilledRingVolume, _OutlineRingVolume.OutlineRingVolume, _RoundRingVolume.RoundRingVolume, _SharpRingVolume.SharpRingVolume, _TwoToneRingVolume.TwoToneRingVolume);
};

exports.RingVolume = RingVolume;