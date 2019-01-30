"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledShop = require("./FilledShop");

var _OutlineShop = require("./OutlineShop");

var _RoundShop = require("./RoundShop");

var _SharpShop = require("./SharpShop");

var _TwoToneShop = require("./TwoToneShop");

var Shop =
/*#__PURE__*/
function Shop(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledShop.FilledShop, _OutlineShop.OutlineShop, _RoundShop.RoundShop, _SharpShop.SharpShop, _TwoToneShop.TwoToneShop);
};

exports.Shop = Shop;