"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLaunch = require("./FilledLaunch");

var _OutlineLaunch = require("./OutlineLaunch");

var _RoundLaunch = require("./RoundLaunch");

var _SharpLaunch = require("./SharpLaunch");

var _TwoToneLaunch = require("./TwoToneLaunch");

var Launch =
/*#__PURE__*/
function Launch(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLaunch.FilledLaunch, _OutlineLaunch.OutlineLaunch, _RoundLaunch.RoundLaunch, _SharpLaunch.SharpLaunch, _TwoToneLaunch.TwoToneLaunch);
};

exports.Launch = Launch;