"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPets = require("./FilledPets");

var _OutlinePets = require("./OutlinePets");

var _RoundPets = require("./RoundPets");

var _SharpPets = require("./SharpPets");

var _TwoTonePets = require("./TwoTonePets");

var Pets =
/*#__PURE__*/
function Pets(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPets.FilledPets, _OutlinePets.OutlinePets, _RoundPets.RoundPets, _SharpPets.SharpPets, _TwoTonePets.TwoTonePets);
};

exports.Pets = Pets;