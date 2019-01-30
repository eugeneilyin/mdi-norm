"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSettings = require("./FilledSettings");

var _OutlineSettings = require("./OutlineSettings");

var _RoundSettings = require("./RoundSettings");

var _SharpSettings = require("./SharpSettings");

var _TwoToneSettings = require("./TwoToneSettings");

var Settings =
/*#__PURE__*/
function Settings(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSettings.FilledSettings, _OutlineSettings.OutlineSettings, _RoundSettings.RoundSettings, _SharpSettings.SharpSettings, _TwoToneSettings.TwoToneSettings);
};

exports.Settings = Settings;