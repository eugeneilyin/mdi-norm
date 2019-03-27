"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneRemoveShoppingCart =
/*#__PURE__*/
function TwoToneRemoveShoppingCart(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M1.41 1.13" + _fragments.nl + _fragments.fg + "zM7 15l1.1-2h2.36l2 2z"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M18.31 6H9.12l4.99 5h1.44z"
  }), _react.default.createElement("path", {
    d: _fragments.bgj
  }));
};

exports.TwoToneRemoveShoppingCart = TwoToneRemoveShoppingCart;