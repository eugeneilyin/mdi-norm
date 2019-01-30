"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledHome = require("./FilledHome");

var _OutlineHome = require("./OutlineHome");

var _RoundHome = require("./RoundHome");

var _SharpHome = require("./SharpHome");

var _TwoToneHome = require("./TwoToneHome");

var Home =
/*#__PURE__*/
function Home(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledHome.FilledHome, _OutlineHome.OutlineHome, _RoundHome.RoundHome, _SharpHome.SharpHome, _TwoToneHome.TwoToneHome);
};

exports.Home = Home;