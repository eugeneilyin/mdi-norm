"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneShop =
/*#__PURE__*/
function TwoToneShop(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 19h16V8H4zM9 9l7.5 4L9 18z"
  }), _react.default.createElement("path", {
    d: _fragments.bgh + "m10 15H4V8h16zM9 9v9l7.5-5z"
  }));
};

exports.TwoToneShop = TwoToneShop;