"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAddToHomeScreen = require("./FilledAddToHomeScreen");

var _OutlineAddToHomeScreen = require("./OutlineAddToHomeScreen");

var _RoundAddToHomeScreen = require("./RoundAddToHomeScreen");

var _SharpAddToHomeScreen = require("./SharpAddToHomeScreen");

var _TwoToneAddToHomeScreen = require("./TwoToneAddToHomeScreen");

var AddToHomeScreen =
/*#__PURE__*/
function AddToHomeScreen(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAddToHomeScreen.FilledAddToHomeScreen, _OutlineAddToHomeScreen.OutlineAddToHomeScreen, _RoundAddToHomeScreen.RoundAddToHomeScreen, _SharpAddToHomeScreen.SharpAddToHomeScreen, _TwoToneAddToHomeScreen.TwoToneAddToHomeScreen);
};

exports.AddToHomeScreen = AddToHomeScreen;