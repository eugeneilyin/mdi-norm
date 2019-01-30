"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledShoppingCart = require("./FilledShoppingCart");

var _OutlineShoppingCart = require("./OutlineShoppingCart");

var _RoundShoppingCart = require("./RoundShoppingCart");

var _SharpShoppingCart = require("./SharpShoppingCart");

var _TwoToneShoppingCart = require("./TwoToneShoppingCart");

var ShoppingCart =
/*#__PURE__*/
function ShoppingCart(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledShoppingCart.FilledShoppingCart, _OutlineShoppingCart.OutlineShoppingCart, _RoundShoppingCart.RoundShoppingCart, _SharpShoppingCart.SharpShoppingCart, _TwoToneShoppingCart.TwoToneShoppingCart);
};

exports.ShoppingCart = ShoppingCart;