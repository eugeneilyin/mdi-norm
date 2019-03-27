"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundRemove =
/*#__PURE__*/
function RoundRemove(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M18 13H6" + _fragments.el + "h12" + _fragments.dk + "z"
  }));
};

exports.RoundRemove = RoundRemove;