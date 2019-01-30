"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFlare = require("./FilledFlare");

var _OutlineFlare = require("./OutlineFlare");

var _RoundFlare = require("./RoundFlare");

var _SharpFlare = require("./SharpFlare");

var _TwoToneFlare = require("./TwoToneFlare");

var Flare =
/*#__PURE__*/
function Flare(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFlare.FilledFlare, _OutlineFlare.OutlineFlare, _RoundFlare.RoundFlare, _SharpFlare.SharpFlare, _TwoToneFlare.TwoToneFlare);
};

exports.Flare = Flare;