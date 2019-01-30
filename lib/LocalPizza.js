"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLocalPizza = require("./FilledLocalPizza");

var _OutlineLocalPizza = require("./OutlineLocalPizza");

var _RoundLocalPizza = require("./RoundLocalPizza");

var _SharpLocalPizza = require("./SharpLocalPizza");

var _TwoToneLocalPizza = require("./TwoToneLocalPizza");

var LocalPizza =
/*#__PURE__*/
function LocalPizza(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLocalPizza.FilledLocalPizza, _OutlineLocalPizza.OutlineLocalPizza, _RoundLocalPizza.RoundLocalPizza, _SharpLocalPizza.SharpLocalPizza, _TwoToneLocalPizza.TwoToneLocalPizza);
};

exports.LocalPizza = LocalPizza;