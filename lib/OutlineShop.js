"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineShop =
/*#__PURE__*/
function OutlineShop(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.bgh + "m10 15H4V8h16zM9 18l7.5-5L9 9z"
  }));
};

exports.OutlineShop = OutlineShop;