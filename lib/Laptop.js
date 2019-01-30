"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLaptop = require("./FilledLaptop");

var _OutlineLaptop = require("./OutlineLaptop");

var _RoundLaptop = require("./RoundLaptop");

var _SharpLaptop = require("./SharpLaptop");

var _TwoToneLaptop = require("./TwoToneLaptop");

var Laptop =
/*#__PURE__*/
function Laptop(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLaptop.FilledLaptop, _OutlineLaptop.OutlineLaptop, _RoundLaptop.RoundLaptop, _SharpLaptop.SharpLaptop, _TwoToneLaptop.TwoToneLaptop);
};

exports.Laptop = Laptop;