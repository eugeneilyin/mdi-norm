"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledGavel = require("./FilledGavel");

var _OutlineGavel = require("./OutlineGavel");

var _RoundGavel = require("./RoundGavel");

var _SharpGavel = require("./SharpGavel");

var _TwoToneGavel = require("./TwoToneGavel");

var Gavel =
/*#__PURE__*/
function Gavel(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledGavel.FilledGavel, _OutlineGavel.OutlineGavel, _RoundGavel.RoundGavel, _SharpGavel.SharpGavel, _TwoToneGavel.TwoToneGavel);
};

exports.Gavel = Gavel;