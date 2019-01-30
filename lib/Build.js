"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBuild = require("./FilledBuild");

var _OutlineBuild = require("./OutlineBuild");

var _RoundBuild = require("./RoundBuild");

var _SharpBuild = require("./SharpBuild");

var _TwoToneBuild = require("./TwoToneBuild");

var Build =
/*#__PURE__*/
function Build(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBuild.FilledBuild, _OutlineBuild.OutlineBuild, _RoundBuild.RoundBuild, _SharpBuild.SharpBuild, _TwoToneBuild.TwoToneBuild);
};

exports.Build = Build;