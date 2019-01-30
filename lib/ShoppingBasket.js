"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledShoppingBasket = require("./FilledShoppingBasket");

var _OutlineShoppingBasket = require("./OutlineShoppingBasket");

var _RoundShoppingBasket = require("./RoundShoppingBasket");

var _SharpShoppingBasket = require("./SharpShoppingBasket");

var _TwoToneShoppingBasket = require("./TwoToneShoppingBasket");

var ShoppingBasket =
/*#__PURE__*/
function ShoppingBasket(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledShoppingBasket.FilledShoppingBasket, _OutlineShoppingBasket.OutlineShoppingBasket, _RoundShoppingBasket.RoundShoppingBasket, _SharpShoppingBasket.SharpShoppingBasket, _TwoToneShoppingBasket.TwoToneShoppingBasket);
};

exports.ShoppingBasket = ShoppingBasket;