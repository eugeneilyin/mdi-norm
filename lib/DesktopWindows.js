"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDesktopWindows = require("./FilledDesktopWindows");

var _OutlineDesktopWindows = require("./OutlineDesktopWindows");

var _RoundDesktopWindows = require("./RoundDesktopWindows");

var _SharpDesktopWindows = require("./SharpDesktopWindows");

var _TwoToneDesktopWindows = require("./TwoToneDesktopWindows");

var DesktopWindows =
/*#__PURE__*/
function DesktopWindows(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDesktopWindows.FilledDesktopWindows, _OutlineDesktopWindows.OutlineDesktopWindows, _RoundDesktopWindows.RoundDesktopWindows, _SharpDesktopWindows.SharpDesktopWindows, _TwoToneDesktopWindows.TwoToneDesktopWindows);
};

exports.DesktopWindows = DesktopWindows;