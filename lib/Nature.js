"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledNature = require("./FilledNature");

var _OutlineNature = require("./OutlineNature");

var _RoundNature = require("./RoundNature");

var _SharpNature = require("./SharpNature");

var _TwoToneNature = require("./TwoToneNature");

var Nature =
/*#__PURE__*/
function Nature(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledNature.FilledNature, _OutlineNature.OutlineNature, _RoundNature.RoundNature, _SharpNature.SharpNature, _TwoToneNature.TwoToneNature);
};

exports.Nature = Nature;