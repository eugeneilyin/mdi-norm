"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledRestaurant = require("./FilledRestaurant");

var _OutlineRestaurant = require("./OutlineRestaurant");

var _RoundRestaurant = require("./RoundRestaurant");

var _SharpRestaurant = require("./SharpRestaurant");

var _TwoToneRestaurant = require("./TwoToneRestaurant");

var Restaurant =
/*#__PURE__*/
function Restaurant(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledRestaurant.FilledRestaurant, _OutlineRestaurant.OutlineRestaurant, _RoundRestaurant.RoundRestaurant, _SharpRestaurant.SharpRestaurant, _TwoToneRestaurant.TwoToneRestaurant);
};

exports.Restaurant = Restaurant;