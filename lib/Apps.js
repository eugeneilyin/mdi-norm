"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledApps = require("./FilledApps");

var _OutlineApps = require("./OutlineApps");

var _RoundApps = require("./RoundApps");

var _SharpApps = require("./SharpApps");

var _TwoToneApps = require("./TwoToneApps");

var Apps =
/*#__PURE__*/
function Apps(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledApps.FilledApps, _OutlineApps.OutlineApps, _RoundApps.RoundApps, _SharpApps.SharpApps, _TwoToneApps.TwoToneApps);
};

exports.Apps = Apps;