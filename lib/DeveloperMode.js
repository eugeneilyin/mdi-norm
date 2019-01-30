"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDeveloperMode = require("./FilledDeveloperMode");

var _OutlineDeveloperMode = require("./OutlineDeveloperMode");

var _RoundDeveloperMode = require("./RoundDeveloperMode");

var _SharpDeveloperMode = require("./SharpDeveloperMode");

var _TwoToneDeveloperMode = require("./TwoToneDeveloperMode");

var DeveloperMode =
/*#__PURE__*/
function DeveloperMode(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDeveloperMode.FilledDeveloperMode, _OutlineDeveloperMode.OutlineDeveloperMode, _RoundDeveloperMode.RoundDeveloperMode, _SharpDeveloperMode.SharpDeveloperMode, _TwoToneDeveloperMode.TwoToneDeveloperMode);
};

exports.DeveloperMode = DeveloperMode;