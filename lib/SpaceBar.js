"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSpaceBar = require("./FilledSpaceBar");

var _OutlineSpaceBar = require("./OutlineSpaceBar");

var _RoundSpaceBar = require("./RoundSpaceBar");

var _SharpSpaceBar = require("./SharpSpaceBar");

var _TwoToneSpaceBar = require("./TwoToneSpaceBar");

var SpaceBar =
/*#__PURE__*/
function SpaceBar(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSpaceBar.FilledSpaceBar, _OutlineSpaceBar.OutlineSpaceBar, _RoundSpaceBar.RoundSpaceBar, _SharpSpaceBar.SharpSpaceBar, _TwoToneSpaceBar.TwoToneSpaceBar);
};

exports.SpaceBar = SpaceBar;