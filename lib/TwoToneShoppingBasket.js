"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneShoppingBasket =
/*#__PURE__*/
function TwoToneShoppingBasket(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3.31 11l2.2 8.01L18.5 19l2.2-8zM12 17" + _fragments.bp
  }), _react.default.createElement("path", {
    d: _fragments.rc
  }));
};

exports.TwoToneShoppingBasket = TwoToneShoppingBasket;