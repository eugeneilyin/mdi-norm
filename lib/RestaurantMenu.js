"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledRestaurantMenu = require("./FilledRestaurantMenu");

var _OutlineRestaurantMenu = require("./OutlineRestaurantMenu");

var _RoundRestaurantMenu = require("./RoundRestaurantMenu");

var _SharpRestaurantMenu = require("./SharpRestaurantMenu");

var _TwoToneRestaurantMenu = require("./TwoToneRestaurantMenu");

var RestaurantMenu =
/*#__PURE__*/
function RestaurantMenu(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledRestaurantMenu.FilledRestaurantMenu, _OutlineRestaurantMenu.OutlineRestaurantMenu, _RoundRestaurantMenu.RoundRestaurantMenu, _SharpRestaurantMenu.SharpRestaurantMenu, _TwoToneRestaurantMenu.TwoToneRestaurantMenu);
};

exports.RestaurantMenu = RestaurantMenu;