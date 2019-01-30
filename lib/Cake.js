"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCake = require("./FilledCake");

var _OutlineCake = require("./OutlineCake");

var _RoundCake = require("./RoundCake");

var _SharpCake = require("./SharpCake");

var _TwoToneCake = require("./TwoToneCake");

var Cake =
/*#__PURE__*/
function Cake(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCake.FilledCake, _OutlineCake.OutlineCake, _RoundCake.RoundCake, _SharpCake.SharpCake, _TwoToneCake.TwoToneCake);
};

exports.Cake = Cake;