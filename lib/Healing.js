"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledHealing = require("./FilledHealing");

var _OutlineHealing = require("./OutlineHealing");

var _RoundHealing = require("./RoundHealing");

var _SharpHealing = require("./SharpHealing");

var _TwoToneHealing = require("./TwoToneHealing");

var Healing =
/*#__PURE__*/
function Healing(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledHealing.FilledHealing, _OutlineHealing.OutlineHealing, _RoundHealing.RoundHealing, _SharpHealing.SharpHealing, _TwoToneHealing.TwoToneHealing);
};

exports.Healing = Healing;