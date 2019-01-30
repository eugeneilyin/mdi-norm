"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAddShoppingCart = require("./FilledAddShoppingCart");

var _OutlineAddShoppingCart = require("./OutlineAddShoppingCart");

var _RoundAddShoppingCart = require("./RoundAddShoppingCart");

var _SharpAddShoppingCart = require("./SharpAddShoppingCart");

var _TwoToneAddShoppingCart = require("./TwoToneAddShoppingCart");

var AddShoppingCart =
/*#__PURE__*/
function AddShoppingCart(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAddShoppingCart.FilledAddShoppingCart, _OutlineAddShoppingCart.OutlineAddShoppingCart, _RoundAddShoppingCart.RoundAddShoppingCart, _SharpAddShoppingCart.SharpAddShoppingCart, _TwoToneAddShoppingCart.TwoToneAddShoppingCart);
};

exports.AddShoppingCart = AddShoppingCart;