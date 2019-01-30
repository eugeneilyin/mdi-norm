"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledGetApp = require("./FilledGetApp");

var _OutlineGetApp = require("./OutlineGetApp");

var _RoundGetApp = require("./RoundGetApp");

var _SharpGetApp = require("./SharpGetApp");

var _TwoToneGetApp = require("./TwoToneGetApp");

var GetApp =
/*#__PURE__*/
function GetApp(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledGetApp.FilledGetApp, _OutlineGetApp.OutlineGetApp, _RoundGetApp.RoundGetApp, _SharpGetApp.SharpGetApp, _TwoToneGetApp.TwoToneGetApp);
};

exports.GetApp = GetApp;