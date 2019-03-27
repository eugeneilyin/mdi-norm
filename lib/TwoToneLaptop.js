"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneLaptop =
/*#__PURE__*/
function TwoToneLaptop(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 6h16v10H4z"
  }), _react.default.createElement("path", {
    d: "M20 18" + _fragments.sq + "H4" + _fragments.jt + "H0v2h24v-2zM4 6h16v10H4z"
  }));
};

exports.TwoToneLaptop = TwoToneLaptop;