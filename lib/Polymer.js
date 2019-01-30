"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPolymer = require("./FilledPolymer");

var _OutlinePolymer = require("./OutlinePolymer");

var _RoundPolymer = require("./RoundPolymer");

var _SharpPolymer = require("./SharpPolymer");

var _TwoTonePolymer = require("./TwoTonePolymer");

var Polymer =
/*#__PURE__*/
function Polymer(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPolymer.FilledPolymer, _OutlinePolymer.OutlinePolymer, _RoundPolymer.RoundPolymer, _SharpPolymer.SharpPolymer, _TwoTonePolymer.TwoTonePolymer);
};

exports.Polymer = Polymer;