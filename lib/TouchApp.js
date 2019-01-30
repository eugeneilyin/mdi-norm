"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledTouchApp = require("./FilledTouchApp");

var _OutlineTouchApp = require("./OutlineTouchApp");

var _RoundTouchApp = require("./RoundTouchApp");

var _SharpTouchApp = require("./SharpTouchApp");

var _TwoToneTouchApp = require("./TwoToneTouchApp");

var TouchApp =
/*#__PURE__*/
function TouchApp(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledTouchApp.FilledTouchApp, _OutlineTouchApp.OutlineTouchApp, _RoundTouchApp.RoundTouchApp, _SharpTouchApp.SharpTouchApp, _TwoToneTouchApp.TwoToneTouchApp);
};

exports.TouchApp = TouchApp;