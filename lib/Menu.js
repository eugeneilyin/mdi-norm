"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledMenu = require("./FilledMenu");

var _OutlineMenu = require("./OutlineMenu");

var _RoundMenu = require("./RoundMenu");

var _SharpMenu = require("./SharpMenu");

var _TwoToneMenu = require("./TwoToneMenu");

var Menu =
/*#__PURE__*/
function Menu(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledMenu.FilledMenu, _OutlineMenu.OutlineMenu, _RoundMenu.RoundMenu, _SharpMenu.SharpMenu, _TwoToneMenu.TwoToneMenu);
};

exports.Menu = Menu;