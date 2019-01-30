"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledEuroSymbol = require("./FilledEuroSymbol");

var _OutlineEuroSymbol = require("./OutlineEuroSymbol");

var _RoundEuroSymbol = require("./RoundEuroSymbol");

var _SharpEuroSymbol = require("./SharpEuroSymbol");

var _TwoToneEuroSymbol = require("./TwoToneEuroSymbol");

var EuroSymbol =
/*#__PURE__*/
function EuroSymbol(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledEuroSymbol.FilledEuroSymbol, _OutlineEuroSymbol.OutlineEuroSymbol, _RoundEuroSymbol.RoundEuroSymbol, _SharpEuroSymbol.SharpEuroSymbol, _TwoToneEuroSymbol.TwoToneEuroSymbol);
};

exports.EuroSymbol = EuroSymbol;