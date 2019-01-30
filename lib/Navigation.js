"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledNavigation = require("./FilledNavigation");

var _OutlineNavigation = require("./OutlineNavigation");

var _RoundNavigation = require("./RoundNavigation");

var _SharpNavigation = require("./SharpNavigation");

var _TwoToneNavigation = require("./TwoToneNavigation");

var Navigation =
/*#__PURE__*/
function Navigation(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledNavigation.FilledNavigation, _OutlineNavigation.OutlineNavigation, _RoundNavigation.RoundNavigation, _SharpNavigation.SharpNavigation, _TwoToneNavigation.TwoToneNavigation);
};

exports.Navigation = Navigation;