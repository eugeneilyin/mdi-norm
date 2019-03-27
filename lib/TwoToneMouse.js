"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneMouse =
/*#__PURE__*/
function TwoToneMouse(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M13 3.16V9h5c-.04-2.94-2.19-5.37-5-5.84zm-2 0C8.19 3.63 6.04 6.06 6 9h5zM11 11H6v4" + _fragments.vs + "v-4z"
  }), _react.default.createElement("path", {
    d: "M20 9c-.04-4.39-3.6-7.93-8-7.93S4.04 4.61 4 9v6" + _fragments.if_ + "zm-7-5.84c2.81.47 4.96 2.9 5 5.84h-5zm-2 0V9H6c.04-2.94 2.19-5.37 5-5.84zM18 15" + _fragments.ih + "s-6-2.69-6-6v-4h12z"
  }));
};

exports.TwoToneMouse = TwoToneMouse;