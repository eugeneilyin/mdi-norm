"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPartyMode = require("./FilledPartyMode");

var _OutlinePartyMode = require("./OutlinePartyMode");

var _RoundPartyMode = require("./RoundPartyMode");

var _SharpPartyMode = require("./SharpPartyMode");

var _TwoTonePartyMode = require("./TwoTonePartyMode");

var PartyMode =
/*#__PURE__*/
function PartyMode(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPartyMode.FilledPartyMode, _OutlinePartyMode.OutlinePartyMode, _RoundPartyMode.RoundPartyMode, _SharpPartyMode.SharpPartyMode, _TwoTonePartyMode.TwoTonePartyMode);
};

exports.PartyMode = PartyMode;