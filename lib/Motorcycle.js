"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledMotorcycle = require("./FilledMotorcycle");

var _OutlineMotorcycle = require("./OutlineMotorcycle");

var _RoundMotorcycle = require("./RoundMotorcycle");

var _SharpMotorcycle = require("./SharpMotorcycle");

var _TwoToneMotorcycle = require("./TwoToneMotorcycle");

var Motorcycle =
/*#__PURE__*/
function Motorcycle(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledMotorcycle.FilledMotorcycle, _OutlineMotorcycle.OutlineMotorcycle, _RoundMotorcycle.RoundMotorcycle, _SharpMotorcycle.SharpMotorcycle, _TwoToneMotorcycle.TwoToneMotorcycle);
};

exports.Motorcycle = Motorcycle;