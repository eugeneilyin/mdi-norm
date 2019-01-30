"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledExplore = require("./FilledExplore");

var _OutlineExplore = require("./OutlineExplore");

var _RoundExplore = require("./RoundExplore");

var _SharpExplore = require("./SharpExplore");

var _TwoToneExplore = require("./TwoToneExplore");

var Explore =
/*#__PURE__*/
function Explore(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledExplore.FilledExplore, _OutlineExplore.OutlineExplore, _RoundExplore.RoundExplore, _SharpExplore.SharpExplore, _TwoToneExplore.TwoToneExplore);
};

exports.Explore = Explore;