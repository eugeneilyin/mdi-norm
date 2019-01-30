"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSpellcheck = require("./FilledSpellcheck");

var _OutlineSpellcheck = require("./OutlineSpellcheck");

var _RoundSpellcheck = require("./RoundSpellcheck");

var _SharpSpellcheck = require("./SharpSpellcheck");

var _TwoToneSpellcheck = require("./TwoToneSpellcheck");

var Spellcheck =
/*#__PURE__*/
function Spellcheck(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSpellcheck.FilledSpellcheck, _OutlineSpellcheck.OutlineSpellcheck, _RoundSpellcheck.RoundSpellcheck, _SharpSpellcheck.SharpSpellcheck, _TwoToneSpellcheck.TwoToneSpellcheck);
};

exports.Spellcheck = Spellcheck;