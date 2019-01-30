"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledMouse = require("./FilledMouse");

var _OutlineMouse = require("./OutlineMouse");

var _RoundMouse = require("./RoundMouse");

var _SharpMouse = require("./SharpMouse");

var _TwoToneMouse = require("./TwoToneMouse");

var Mouse =
/*#__PURE__*/
function Mouse(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledMouse.FilledMouse, _OutlineMouse.OutlineMouse, _RoundMouse.RoundMouse, _SharpMouse.SharpMouse, _TwoToneMouse.TwoToneMouse);
};

exports.Mouse = Mouse;