"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledToys = require("./FilledToys");

var _OutlineToys = require("./OutlineToys");

var _RoundToys = require("./RoundToys");

var _SharpToys = require("./SharpToys");

var _TwoToneToys = require("./TwoToneToys");

var Toys =
/*#__PURE__*/
function Toys(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledToys.FilledToys, _OutlineToys.OutlineToys, _RoundToys.RoundToys, _SharpToys.SharpToys, _TwoToneToys.TwoToneToys);
};

exports.Toys = Toys;