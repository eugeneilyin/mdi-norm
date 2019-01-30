"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFullscreen = require("./FilledFullscreen");

var _OutlineFullscreen = require("./OutlineFullscreen");

var _RoundFullscreen = require("./RoundFullscreen");

var _SharpFullscreen = require("./SharpFullscreen");

var _TwoToneFullscreen = require("./TwoToneFullscreen");

var Fullscreen =
/*#__PURE__*/
function Fullscreen(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFullscreen.FilledFullscreen, _OutlineFullscreen.OutlineFullscreen, _RoundFullscreen.RoundFullscreen, _SharpFullscreen.SharpFullscreen, _TwoToneFullscreen.TwoToneFullscreen);
};

exports.Fullscreen = Fullscreen;