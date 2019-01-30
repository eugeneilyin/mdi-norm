"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSubway = require("./FilledSubway");

var _OutlineSubway = require("./OutlineSubway");

var _RoundSubway = require("./RoundSubway");

var _SharpSubway = require("./SharpSubway");

var _TwoToneSubway = require("./TwoToneSubway");

var Subway =
/*#__PURE__*/
function Subway(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSubway.FilledSubway, _OutlineSubway.OutlineSubway, _RoundSubway.RoundSubway, _SharpSubway.SharpSubway, _TwoToneSubway.TwoToneSubway);
};

exports.Subway = Subway;