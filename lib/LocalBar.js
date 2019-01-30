"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLocalBar = require("./FilledLocalBar");

var _OutlineLocalBar = require("./OutlineLocalBar");

var _RoundLocalBar = require("./RoundLocalBar");

var _SharpLocalBar = require("./SharpLocalBar");

var _TwoToneLocalBar = require("./TwoToneLocalBar");

var LocalBar =
/*#__PURE__*/
function LocalBar(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLocalBar.FilledLocalBar, _OutlineLocalBar.OutlineLocalBar, _RoundLocalBar.RoundLocalBar, _SharpLocalBar.SharpLocalBar, _TwoToneLocalBar.TwoToneLocalBar);
};

exports.LocalBar = LocalBar;